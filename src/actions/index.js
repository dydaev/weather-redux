import fetch from 'isomorphic-fetch';

import { WEATHER } from '../const/actions';

const APP_ID = '9ccb20b5e2fd3d34779cb287dcc4e336';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function fetchWeather(params) {
	const url = `${BASE_URL}/${params}&units=metric&lang=ru&appid=${APP_ID}`;
	// console.log(url);
	return fetch(url)
	.then(response => response.json())
}

// export const upWeathe = () =>
//   {
//     this.props.updateStor(actions.updateCurrentWeather(this.props.location));
//     this.props.updateStor(actions.updateWeather(this.props.period, this.props.location));
//   }
// export const upPeriod = () =>
//   {
//     this.updateStor(actions.changePeriod(this.props.period === 5 ? 10 : 5));
//     this.upWeathe();
//   }
// export const upSelectedDay = day =>
//   {
//     this.props.updateStor(actions.selectDay(day));
//   }
// export const upLocation = location =>
//   {
//     this.props.updateStor(actions.updateLocation(location));
//     this.upWeathe();
//   }

export const actions = {
	updateLocation: location => {
		return dispatch => {
			dispatch({type: WEATHER.CHANGE_LOCATION, payload: location});
		}
	},
	updateWeather: (period, location) => {
		return (dispatch) => {
			fetchWeather("forecast/daily?q=" + location + "&cnt=" + period)
			.then(result => dispatch({type: WEATHER.UPDATE_WEATHER, payload: result}));
		}
	},
	updateCurrentWeather: location => {
		return dispatch => {
			fetchWeather("weather?q=" + location)
			.then(result => dispatch({type: WEATHER.UPDATE_CURRENT_WEATHER, payload: result}));
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
