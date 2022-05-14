import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
	const [movie, setMovie] = useState([]);
	const [loading, onLoading] = useState(true);
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		onLoading(false);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movie.map((movie) => (
						<Movie
							key={movie.id}
							large_cover_img={movie.large_cover_image}
							title={movie.title}
							description={movie.description_full}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Detail;
