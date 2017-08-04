import React from 'react';

import { WeatherIcon } from '../const/img.js'

const Temp = (props) =>{
  return (
    <div className="now-temp">
      <h2>{props.main.temp}</h2>
      <img src={WeatherIcon[props.weather[0].main]}/>
    </div>
  )
}

export default Temp;
