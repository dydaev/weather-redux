import React from 'react';

import Search from '../components/hourWeath'

import { WeatherIcon } from '../const/img.js'

const HourWeath = props =>{
  return (
    <div className="hour-weath">
      <h2>{props.period}</h2>
      <div>
        <h2>{props.temp[props.periodType]}</h2>
        <img src={"./img/" + props.weather[0].main + ".png"} alt={props.weather[0].main}/>
      </div>
    </div>
  )
}

export default HourWeath;
