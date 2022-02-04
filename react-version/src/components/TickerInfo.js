import "../App.css";

function TickerInfo({ tickerInfo }) {
	return (
		<div className='ticker-info'>
			<h2>{tickerInfo?.symbol}</h2>
			<h3>{tickerInfo?.currency}</h3>
			<p>{tickerInfo?.chartPreviousClose}</p>
		</div>
	);
}

export default TickerInfo;
