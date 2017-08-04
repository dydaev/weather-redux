import React from 'react';

import Search from '../components/hourWeath'

import { WeatherIcon } from '../const/img.js'

const HourWeath = props =>{
  return (
    <div className="hour-weath">
      <h2>{props.time}</h2>
      <div>
        <h2>{props.main.temp}</h2>
        <img src={WeatherIcon[props.weather[0].main]}/>
      </div>
    </div>
  )
}

export default HourWeath;
