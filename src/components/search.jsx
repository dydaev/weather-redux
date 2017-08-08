import React from 'react';

const Search = props =>{
  const changeLocation = () => {
    if(this.locationInput.value !== "") {
      props.focus(this.locationInput.value);
      this.locationInput.value = ""
    }
  }
  const changeVal = event => {
    if(event.key === "Enter") {
      changeLocation();
    }
  }
  let location = props.weather.city === undefined ? "" : props.weather.city.name;
  let country = props.weather.city === undefined ? "" : props.weather.city.country;
  return (
    <div className="conteiner-search">
      <input 
        id="search"
        ref={(input) => {
          this.locationInput = input
        }} 
        onBlur={changeLocation} 
        onKeyPress={changeVal}
        className="search" 
        type="search" 
        results="5"
        placeholder={location}
      />
        <span>{country}</span>
    </div>
  )
}

export default Search;
