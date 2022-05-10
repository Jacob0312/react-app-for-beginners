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
	const [toDo, setTodo] = useState("");
	const [toDos, setToDos] = useState([]);

	const onChange = (event) => {
		setTodo(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();

		if ({ toDo } === "") {
			return;
		} else {
			setToDos((currentArray) => [toDo, ...currentArray]);
			console.log(toDos);
			setTodo("");
		}
	};

	const onClick = (event) => {
		const li = event.target.parentElement;

		li.remove();
	};

	return (
		<div>
			<h1>My To toDos ({toDos.length})</h1>
			<ul>
				{toDos.map((item, index) => (
					<li key={index}>
						{item} <button onClick={onClick}>❌</button>
					</li>
				))}
			</ul>

			<form onSubmit={onSubmit}>
				<input
					value={toDo}
					type="text"
					placeholder="Put your todos"
					onChange={onChange}
				></input>
				<button>Add To Do</button>
			</form>
		</div>
	);
}

export default App;
