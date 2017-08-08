import React from 'react';
import Tomorrow from '../components/tomorrow.jsx'
import { nmDay } from '../const/date.js'

const FutureDays = props =>{
  return (
    <article className="future-days">
      {props.list.map((weath, ind) =>{
        return (<Tomorrow click={props.click} ind={ind} key={ind} { ...weath } nmDay={nmDay[ind]}/>)
      })}
    </article>
  )
}

export default FutureDays;
