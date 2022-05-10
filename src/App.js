import Button from "./button.js";
import styles from "./Title.module.css";
import { useState, useEffect } from "react";

function Hello() {
	useEffect(() => {
		console.log("Hello!");
		return () => console.log("Bye");
	}, []);
	return <h1>Hello!</h1>;
}

function App() {
	const [show, showControll] = useState(true);
	const onClick = () => {
		showControll((prev) => !prev);
	};

	return (
		<div>
			{show ? <Hello /> : null}
			<button onClick={onClick}>{show ? "Hide" : "Show"}</button>
		</div>
	);
}

export default App;
