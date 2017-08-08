import React from 'react';

const Img = props =>{
  // <img src={"./img/" + props.img + ".png"} alt={props.img}/>
  let icon = "http://openweathermap.org/img/w/" + props.icon + ".png";
  icon = props.icon === "undefined" ? "" : icon;
  return (
      <img src={icon} alt={props.img}/>
)}

export default Img;