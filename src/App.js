import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

// const joke = getJoke();
function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("https://v2.jokeapi.dev/joke/Any?type=single").then((res) => {
			setData(res.data);
		});
	}, []);
	const joke = data.joke;
	return (
		<div className="App">
			<h1>Here is a joke for you!</h1>
			<p>{joke}</p>
			<br></br>
			<br></br>
			Created By James Fincher
		</div>
	);
}

export default App;
