import React from 'react';

const Img = ({ icon, img }) =>{
  icon = "https://openweathermap.org/img/w/" + icon + ".png";
  return (
      <img src={ icon } alt={ img }/>
)}

export default Img;
