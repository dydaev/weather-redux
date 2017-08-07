import { WEATHER } from '../const/actions';

const initialState = {
	period: 5,
	location: "Kiev",
	select_day: 0,
	current:{
		weather: [{
			main: "Clear"
		}],
		main:{ 
			temp: 0
		}
	},
	weather:{
		list:[{
			clouds: 0,
			deg: 0,
			dt: 1501927200,
			humidity: 0,
			pressure: "--//--",
			speed: "--//--",
			temp:{
				day: 0
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
   	case WEATHER.UPDATE_CURRENT_WEATHER:
    	return Object.assign({}, state, {
    		current: action.payload
    	});
    default:
    return state;
  }
}
