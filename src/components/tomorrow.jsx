import React, {PureComponent} from 'react';
import Img from './img';
import Tools from '../tools';
import { nmDay } from '../const/date.js'

class Tomorrow extends PureComponent
{
  constructor(props) {
    super(props);
    let date = new Date(props.dt * 1000)
    this.state = {
      ind: props.ind,
      date: date,
      _class: props.selectedDay !== props.ind
              ? "tomorrow"
              : "tomorrow pink-border",
      temp_night: props.temp.night,
      temp_day: props.temp.day,
      img: props.img,
      icon: props.icon,
      nmDay: nmDay[date.getDay()]
    }
  }
  buttonCliced() {
    this.props.click(this.state.ind);
  }
  componentWillReceiveProps(nextProps) {
    let date = new Date(nextProps.dt * 1000)
    this.setState({
      ind: nextProps.ind,
      date: date,
      _class: nextProps.selectedDay !== nextProps.ind
              ? "tomorrow"
              : "tomorrow pink-border",
      temp_night: nextProps.temp.night,
      temp_day: nextProps.temp.day,
      img: nextProps.img,
      icon: nextProps.icon,
      nmDay: nmDay[date.getDay()]
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if( 
            nextState.temp_night !== this.state.temp_night 
        ||  nextState.temp_night !== this.state.temp_night 
        ||  nextState._class !== this.state._class
        ||  nextState.img !== this.state.img
      ) {
      return true;
    }
    return false;
  }
  render() {
    console.log("Rended: tomorrow #", this.state.ind) 
    return (
     <a href="#a" onClick={this.buttonCliced.bind(this)}>
      <div className={this.state._class}>
          <h4>{this.state.ind ? this.state.nmDay : "Сегодня"}</h4>
          <Img img={this.state.img} icon={this.state.icon}/>
          <p>ночь {Tools.convertTemp(this.state.temp_night)}</p>
          <p>день {Tools.convertTemp(this.state.temp_day)}</p>
      </div>
      </a>
    )
  }
}

export default Tomorrow;
