import React from 'react';

const Img = props =>{
  return (
      <img src={"./img/" + props.img + ".png"} alt={props.img}/>
)}

export default Img;