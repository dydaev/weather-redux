import { WEATHER } from '../const/actions';

const initialState = {
	period: 5,
  location: "Kiev",
	select_day: 0,
	weather:{
		list:[{
			clouds: 32,
			deg: 309,
			dt: 1501927200,
			humidity: 52,
			pressure: "1012.52",
			speed: "4.76",
			temp:{
				day: 15
			},
			weather:[{
				main: "Clear"
			}]
		}]
	}
};

export default function mainReducer(state = initialState, action)
{
	console.log("STORE:", state);
  switch (action.type) {
    case WEATHER.UPDATE_WEATHER:
      return Object.assign({}, state, {
				weather: action.payload
			});
		case WEATHER.SELECTED_DAY:
	     return Object.assign({}, state, {
				select_day: action.payload
			});
    case WEATHER.CHANGE_PERIOD:
      return Object.assign({}, state, {
        period: action.payload
      });

    default:
    return state;
  }
}
