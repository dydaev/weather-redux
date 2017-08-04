import React from 'react';

import Tomorrow from '../components/tomorrow.jsx'

import { nmDay } from '../const/date.js'
import IMG from '../const/img.js'

const FutureDays = props =>{
  return (
    <article> className="future-days">
      {props.list.map((weath, ind) =>{
        return (<Tomorrow key={ind} prp={ weath } nmDay={nmDay[ind]}/>)
      })}
    </article>
  )
}

export default FutureDays;
