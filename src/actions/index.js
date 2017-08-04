import fetch from 'isomorphic-fetch';

import { WEATHER } from '../const/actions';

const APP_ID = '9ccb20b5e2fd3d34779cb287dcc4e336';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

function fetchWeather(params) {
	const url = `${BASE_URL}/${params}&units=metric&appid=${APP_ID}`;
	return fetch(url).then(response => response.json());
}

export const actions = {
	updateWeather: (period, location) => {
		const payload = fetchWeather("forecast/daily?q=London&cnt=7");
		console.log(period);
		console.log("action - updateWeather" , payload);
		return (dispatch) => {
			dispatch({type: WEATHER.UPDATE_WEATHER, payload: payload});
		}
	},
	changePeriod: (period) => {
		return (dispatch) => {
			dispatch({type: WEATHER.CHANGE_PERIOD, payload: 6});
		}
	}
};
