import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';

import './App.css';

import { WEATHER } from './const/actions';
import Header from './containers/header'
import Today from './containers/today'
import FutureDays from './containers/future-days'

class App extends Component {

//TODO move methods to actions
  upWeathe()
  {
    this.props.updateStor(actions.updateCurrentWeather(this.props.location));
    this.props.updateStor(actions.updateWeather(this.props.period, this.props.location));
  }
  upPeriod()
  {
    this.props.updateStor(actions.changePeriod(this.props.period === 5 ? 10 : 5));
  }
  upSelectedDay(day)
  {
    this.props.updateStor(actions.selectDay(day));
  }
  
  constructor(props){
    super(props);
    this.props.updateStor(actions.updateCurrentWeather(this.props.location));
    this.props.updateStor(actions.updateWeather(this.props.period, this.props.location));
  }

  render() {return (
      <main className="App">
        <h1>Hello {this.props.period}</h1>
        <Today select_day={this.props.select_day} {...this.props.weather}/>
        <FutureDays click={this.upSelectedDay.bind(this)} {...this.props.weather}/>

        <button onClick={this.upWeathe.bind(this)}>update weather</button>
        <button onClick={this.upPeriod.bind(this)}>change {this.props.period}</button>
      </main>
    );}
}

// const mapStateToProps = function(store) {
//   return
export default connect(
  store => ({...store}),
  dispatch => ({
    updateStor:(dispatcher) => {
      dispatch(dispatcher)}
  })
)(App);