import React from 'react';
import Img from './img';
import Tools from '../tools';
import { nmDay } from '../const/date.js'

const Tomorrow = props => {
  let date = new Date(props.dt * 1000);
  const buttonCliced = () => {
    props.click(props.ind);
  }
  return (
   <a href="#a" onClick={buttonCliced}>
    <div className="tomorrow">
        <h4>{props.ind ? nmDay[date.getDay()] : "Сегодня"}</h4>
        <Img {...props.weather[0]}/>
        <p>ночь {Tools.convertTemp(props.temp.night)}</p>
        <p>день {Tools.convertTemp(props.temp.day)}</p>
    </div>
    </a>
  )
}

export default Tomorrow;
