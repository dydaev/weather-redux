import fetch from 'isomorphic-fetch';

import { WEATHER } from '../const/actions';

const APP_ID = '9ccb20b5e2fd3d34779cb287dcc4e336';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

function fetchWeather(params) {
	const url = `${BASE_URL}/${params}&units=metric&appid=${APP_ID}`;
	return fetch(url)
	.then(response => response.json())
}

export const actions = {
	updateWeather: (period, location) => {
		return (dispatch) => {
			fetchWeather("forecast/daily?q=" + location + "&cnt=" + period)
			.then(result => dispatch({type: WEATHER.UPDATE_WEATHER, payload: result}));
		}
	},
	changePeriod: period => {
		return (dispatch) => {
			dispatch({type: WEATHER.CHANGE_PERIOD, payload: period});
		}
	},
	selectDay: day => {
		return dispatch => {
			dispatch({type: WEATHER.SELECTED_DAY, payload: day})
		}
	}
};
