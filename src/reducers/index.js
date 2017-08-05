import { WEATHER } from '../const/actions';

const initialState = {
	period: 5,
  location: "Kiev"
};

export default function mainReducer(state = initialState, action)
{
  switch (action.type) {
    case WEATHER.UPDATE_WEATHER:
      return Object.assign({}, state, {
				weather: action.payload
			});

    case WEATHER.CHANGE_PERIOD:
      return Object.assign({}, state, {
        period: action.payload
      });

    default:
    return state;
  }
}
