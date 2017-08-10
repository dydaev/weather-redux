import React from 'react';
import Tomorrow from '../components/tomorrow.jsx'
import { nmDay } from '../const/date.js'

const FutureDays = props =>{
  return (
    <article className="future-days">
      {props.list.map((weath, ind) =>{
        return (<Tomorrow
          ind={ind} key={ind}
          click={props.click}
          selectedDay={props.selectedDay}
          { ...weath }
          nmDay={nmDay[ind]}/>)
      })}
    </article>
  )
}

export default FutureDays;
