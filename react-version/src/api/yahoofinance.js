import axios from "axios";

// API Functions
const API_KEY = process.env.REACT_APP_YAHOO_FINANCE_API_KEY;

export const getChart = async (ticker) => {
	const url = `https://yfapi.net/v8/finance/chart/${ticker}`;
	var options = {
		headers: {
			"x-api-key": API_KEY
		}
	};
	try {
		const response = await axios.get(url, options);
		return response.data.chart.result[0].meta;
	} catch (error) {
		return null;
	}
};
