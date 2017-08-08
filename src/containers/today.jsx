import React from 'react';

import HourWeath from '../components/hourWeath';

const Today = props =>{
  let weathArray = [];
  
  const periods = {
    "night": {timeOf: 0, title: "Ночь"},
    "morn": {timeOf: 6, title: "Утро"},
    "day": {timeOf: 12, title: "День"},
    "eve": {timeOf: 18, title: "Вечер"}
  };
  weathArray = Object.keys(periods).map( period =>{
    return {
      period: periods[period].title,
      periodType: period,
      ...props.list[props.select_day]
    };
  });
  const Line = ({ opacity }) => {
    const splitterStyle = {
         opacity: opacity
     }
    return <div style={splitterStyle} className="breack-line"/>
  }
  return (
    <article className="today">
      {weathArray.map((weathOfPeriod, ind) => {
        let line = ind === 0 ? "" : <Line opasity={ind * 0.1 * 3}/>;
        return  <div key={ind}>
                  {line}
                  <HourWeath  {...weathOfPeriod}/>
                </div>
      })}
    </article>
  )
}
export default Today;
