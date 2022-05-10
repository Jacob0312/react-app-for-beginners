import Button from "./button.js";
import styles from "./Title.module.css";
import { useState, useEffect } from "react";
function App() {
	const [click, setClick] = useState(0);
	const onClick = () => setClick((prev) => prev + 1);

	const [search, setSearch] = useState("");
	const onSearch = (event) => setSearch(event.target.value);

	const runCommand = () => console.log("I run only once!");
	useEffect(runCommand, []);
	useEffect(() => {
		console.log("I run all the times");
	}, [click]);

	const ifSearch = () => {
		if ([search] !== "" && search.length > 5) {
			console.log(`Searching for ${search}`);
		}
	};
	useEffect(ifSearch, [search]);
	return (
		<div>
			<input
				type="text"
				placeholder="Search"
				value={search}
				onChange={onSearch}
			></input>
			<h1 className={styles.title}>Clicked: {click} </h1>
			<Button text={"continue"} onClick={onClick} />
		</div>
	);
}

export default App;
