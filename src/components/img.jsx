import React from 'react';

const Img = props =>{
  // <img src={"./img/" + props.img + ".png"} alt={props.img}/>
  // let icon = props === undefined ? "01n" : props.icon;
  // console.log(props , " = ", icon);
  const icon = "https://openweathermap.org/img/w/" + props.icon + ".png";
  return (
      <img src={icon} alt={props.img}/>
)}

export default Img;
