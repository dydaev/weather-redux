import React from 'react';
import Img from './img';
import Tools from '../tools';
import Search from '../components/hourWeath'

import { WeatherIcon } from '../const/img.js'

const HourWeath = props =>{
  return (
    <div className="hour-weath">
      <h2>{props.period}</h2>
      <div>
        <h2>{Tools.convertTemp(props.temp[props.periodType])}</h2>
        <Img {...props.weather[0]}/>
      </div>
    </div>
  )
}

export default HourWeath;
