import { WEATHER } from '../const/actions';

const initialState = {
	period: 5,
  city: "Kiev"
};

export default function mainReducer(state = initialState, action)
{
  switch (action.type) {
    case WEATHER.UPDATE_WEATHER:
      return Object.assign({}, state, {
				weather: action.payload.json
			});

    case WEATHER.CHANGE_PERIOD:
    console.log("period change");
      return Object.assign({}, state, {
        period: action.payload
      });

    default:
    return state;
  }
}
