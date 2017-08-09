import React, {PureComponent} from 'react';

class Search extends PureComponent
{
  constructor(props) {
    super(props);
    this.changeVal = this.changeVal.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.state = {
      location:  props.location,
      country: props.country
    }
  }
  componentWillUpdate(nextProps, nextState) {
    this.setState({
      location:  nextProps.location,
      country: nextProps.country
    })
  }
  changeLocation() {
    if(this.locationInput.value !== "") {
      this.props.focus(this.locationInput.value);
      this.locationInput.value = "";
    }
  }
  changeVal(event) {
    if(event.key === "Enter") {
      this.changeLocation();
    }
  }
  render() {
    console.log("search: Rendered ", this.state.location, ":", this.state.country)
    return(
      <div className="conteiner-search">
        <input 
          id="search"
          ref={ input => {
            this.locationInput = input
          }} 
          onBlur={this.changeLocation.bind(this)} 
          onKeyPress={this.changeVal.bind(this)}
          className="search" 
          type="search" 
          results="5"
          placeholder={this.state.location}
        />
        <span>{this.state.country}</span>
      </div>
    )
  }
}

export default Search;
