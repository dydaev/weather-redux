import React from 'react';

import { nmDay } from '../const/date.js'
import { WeatherIcon } from '../const/img.js'

const Tomorrow = props =>{
  return (
    <div> className="tomorrow">
      <h4>{props.nmDay}</h4>
      <img src={WeatherIcon[props.main]}/>
      <p>день {props.day}</p>
      <p>ночь {props.night}</p>
    </div>
  )
}

export default Tomorrow;
