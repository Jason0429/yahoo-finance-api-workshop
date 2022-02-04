import { useState } from "react";
import "./App.css";
import { getChart } from "./api/yahoofinance";
import TickerInfo from "./components/TickerInfo";

function App() {
	const [ticker, setTicker] = useState("");
	const [error, setError] = useState("");
	const [data, setData] = useState([]);

	const handleAddInfo = async () => {
		// If input field is empty, do nothing.
		if (!ticker.trim()) return;

		const info = await getChart(ticker);
		console.log(info);

		// If ticker cannot be found:
		if (!info) {
			setError("Ticker cannot be found.");
			setTimeout(() => setError(""), 3000);
		} else {
			// If ticker exists:
			setData((prev) => [...prev, info]);
		}
	};

	return (
		<div className='App'>
			{/* Title */}
			<h1 className='title center'>Disrupt: Yahoo Finance API Workshop</h1>
			{/* Inputs and Button */}
			<div className='column'>
				<input
					className='ticker-input'
					placeholder='Enter Ticker'
					value={ticker}
					onChange={(e) => {
						setTicker(e.currentTarget.value);
					}}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							handleAddInfo();
						}
					}}
				/>
				<button className='chart-button' onClick={handleAddInfo}>
					Get Chart
				</button>
				<div className='error-message'>{error}</div>
			</div>
			{/* Data */}
			<div className='column'>
				{data.map((info, idx) => (
					<TickerInfo tickerInfo={info} key={idx} />
				))}
			</div>
		</div>
	);
}

export default App;
