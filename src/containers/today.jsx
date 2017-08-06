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
  
  /*if(props.select_day == 0) { //if need 
    const hour = new Date().getHours();
    weathArray = Object.keys(periods).reduce((acc, period, ind) => {
      let result = acc;
      if(periods[period].timeOf >= hour) {
        result.push({ 
          period: periods[period].title,
          periodType: period,
          ...props.list[0]
        });
      }
      return result
    },[])
  } else {//next "weathArray cut to this"
}//TODO add missing periods from next day (Array.concat())*/
    weathArray = Object.keys(periods).map( period =>{
      return {
        period: periods[period].title,
        periodType: period,
        ...props.list[0]
      };
    });
console.log("-->", weathArray);
console.log("prop.list-->", props);
  return (
    <article>
      {weathArray.map((weathOfPeriod, ind) => {
        return <HourWeath key={ind}  {...weathOfPeriod}/>
      })}
    </article>
  )
}
export default Today;
