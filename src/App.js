import { useState, useEffect } from "react";

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<div key={movie.id}>
							<h2>{movie.title}</h2> <h3>rating: {movie.rating}</h3>
							<img src={movie.medium_cover_image} />{" "}
							<ul>
								{movie.genres.map((g) => (
									<li key={g}>{g}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
export default App;
