import React from 'react';

import { nmDay } from '../const/date.js'
import { WeatherIcon } from '../const/img.js'

const Tomorrow = props => {
let date = new Date(props.dt* 1000);

 return (
    <div className="tomorrow">
      <h4>{nmDay[date.getDay()]}</h4>
      <img src={WeatherIcon[props.main]}/>
      <p>день {props.temp.day}</p>
      <p>ночь {props.temp.night}</p>
    </div>
  )
}

export default Tomorrow;
