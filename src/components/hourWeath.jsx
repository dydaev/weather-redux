import React from 'react';
import Img from './img';
import Search from '../components/hourWeath'

import { WeatherIcon } from '../const/img.js'

const HourWeath = props =>{
  return (
    <div className="hour-weath">
      <h2>{props.period}</h2>
      <div>
        <h2>{props.temp[props.periodType]}</h2>
        <Img img={props.weather[0].main}/>
      </div>
    </div>
  )
}

export default HourWeath;
