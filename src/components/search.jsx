import React from 'react';

const Search = props =>{
  let locationInput;
  const changeLocation = () => {
    props.focus(this.locationInput.value);
  }
  return (
      <input 
        ref={(input) => {
          this.locationInput = input
        }} 
        onBlur={changeLocation} 
        className="search" 
        type="search" 
        results="5"
        placeholder={props.location}
      />
  )
}

export default Search;
