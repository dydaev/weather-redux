import React from 'react';

import { nameDay } from '../const/date.js'

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if(mm<10) {
    mm = '0'+mm
}

const TodayDate = (props) =>{
  return (
    <div className="today-date">
      <p>{dd + "." + mm + "." + yyyy}</p>
      <h3>{nameDay[today.getDay()]}</h3>
    </div>
  )
}

export default TodayDate;
