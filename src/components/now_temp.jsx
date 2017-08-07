import React from 'react';
import Img from './img';
import Tools from '../tools';
import { WeatherIcon } from '../const/img.js';

const Temp = props => {

  return (
    <div className="now-temp">
      <h2>{Tools.convertTemp(props.main.temp)}</h2>
      <Img img={props.weather[0].main}/>
    </div>
  )
}

export default Temp;
