import React from 'react';

import { nmDay } from '../const/date.js'
import { WeatherIcon } from '../const/img.js'


const Tomorrow = props => {
  let date = new Date(props.dt * 1000);
  const buttonCliced = () => {
    props.click(props.ind);
  }
  return (
   <a href="#" onClick={buttonCliced}>
    <div className="tomorrow">
        <h4>{props.ind ? nmDay[date.getDay()] : "Сегодня"}</h4>
        <img src={"./img/" + props.weather[0].main + ".png"} alt={props.weather[0].main}/>
        <p>ночь {props.temp.night}</p>
        <p>день {props.temp.day}</p>
    </div>
    </a>
  )
}

export default Tomorrow;
