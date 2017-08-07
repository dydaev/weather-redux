import React from 'react';
import Img from './img';
import { WeatherIcon } from '../const/img.js';

const Temp = props =>{
  console.log(props);
  return (
    <div className="now-temp">
      <h2>{props.list[0].temp.max}</h2>
      <Img img={props.list[0].weather[0].main}/>
    </div>
  )
}

export default Temp;
