import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import periods from './const/periods'
import Tools from './tools'
import './App.css';

import Header from './containers/header'
import Today from './containers/today'
import FutureDays from './containers/future-days'

class App extends Component {
  constructor(props){
    super(props);
    this.upPeriod();
  }
//TODO move methods to actions
  upWeathe()
  {
    let self = this;
    setTimeout(function(){
      self.props.updateStor(actions.updateCurrentWeather(self.props.location));
      self.props.updateStor(actions.updateWeather(self.props.period, self.props.location));
    },10)
  }
  upPeriod()
  { this.props.updateStor(
      actions.changePeriod(
        Tools.getNextPeriod(periods, this.props.period)
      )
    );
    this.upWeathe()
  }
  upSelectedDay(day)
  {
    this.props.updateStor(actions.selectDay(day));
  }
  upLocation(location)
  {
    this.props.updateStor(actions.updateLocation(location));
    this.upWeathe()
  }
  render() {
    const showDays = Tools.getNextPeriod(periods, this.props.period)
    //TODO fix bag with <Header focus={this.upLocation.bind(this), rerendering
    //due to binding
    return (
      <main className="App">
        <Header focus={this.upLocation.bind(this)} {...this.props}/>
        <Today select_day={this.props.select_day} {...this.props.weather}/>
        <div className="change-days">
          <a href="#a" onClick={this.upPeriod.bind(this)}>Показать погоду на {showDays} дней</a>
        </div>
        <FutureDays click={this.upSelectedDay.bind(this)} {...this.props.weather}/>
        <p id="copyrigh">&copy; 2017 designed by romaChe</p>
      </main>
    );}
}

export default connect(
  store => ({...store}),
  dispatch => ({
    updateStor:(action) => {
      dispatch(action)}
  })
)(App);
