import React from 'react';

const Img = props =>{
  // <img src={"./img/" + props.img + ".png"} alt={props.img}/>
  return (
      <img src={"http://openweathermap.org/img/w/" + props.icon + ".png"} alt={props.img}/>
)}

export default Img;