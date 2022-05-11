import { useState, useEffect } from "react";

function App() {
	const [loading, setLoading] = useState(true);

	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);

	const [money, setMoney] = useState(0);
	const onChange = (event) => setMoney(event.target.value);
	const [select, setSelect] = useState(false);
	const [price, setPrice] = useState(0);
	const [name, setName] = useState("");
	const regex = /[+-]?\d+(\.\d+)?/g;
	const onChangeOp = (event) => {
		setSelect(true);
		setPrice(event.target.value.match(regex));
		setName(event.target.value.replace(/ .*/, ""));
	};

	return (
		<div>
			{loading ? <h1>The Coins!</h1> : <h1>{coins.length} loaded</h1>}
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<select onChange={onChangeOp}>
					{coins.map((coin) => (
						<option>
							{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
						</option>
					))}
				</select>
			)}

			{loading === false && select ? (
				<form>
					<label htmlFor="USD">The USD you have: </label>
					<input
						id="USD"
						placeholder="Input your money in USD"
						type="number"
						onChange={onChange}
						value={money}
					></input>
				</form>
			) : loading === true && select === false ? null : (
				<h3>🙄Select the coins first!</h3>
			)}

			{loading === false && money != 0 ? (
				<form>
					<label>Coins you can convert: </label>
					<input
						placeholder="result"
						disabled
						id="converter"
						value={money / Math.floor(price) + " " + name}
					></input>
				</form>
			) : loading === true && money === 0 ? null : (
				<h3>🤔Fill in the USD first</h3>
			)}
		</div>
	);
}
export default App;
