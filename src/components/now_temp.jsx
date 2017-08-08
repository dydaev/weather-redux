import React from 'react';
import Img from './img';
import Tools from '../tools';

const Temp = props => {
  return (
    <div className="now-temp">
      <h2>{Tools.convertTemp(props.main.temp)}</h2>
      <Img {...props.weather[0]}/>
    </div>
  )
}

export default Temp;
