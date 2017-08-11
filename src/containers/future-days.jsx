import React from 'react';
import Tomorrow from '../components/tomorrow.jsx'
import { nmDay } from '../const/date.js'

const FutureDays = props =>{
  return (
    <article className="future-days">
      {props.list.map((weath, ind) =>{
        return (
          <Tomorrow
            ind={ind} key={ind}
            img={weath.weather[0].main}
            icon={weath.weather[0].icon}
            temp={weath.temp}
            click={props.click}
            selectedDay={props.selectedDay}
            nmDay={nmDay[ind]}
          />
      )})}
    </article>
  )
}

export default FutureDays;
