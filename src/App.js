import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';

import './App.css';

import Header from './containers/header'
import Today from './containers/today'
import FutureDays from './containers/future-days'

class App extends Component {

  render() {
    console.log(this);
    return (
      <main className="App">

<h1>Hello {this.props.period}</h1>

<button onClick={this.props.updateWeather.bind(this)}>update weather</button>
<button onClick={this.props.changePeriod.bind(this)}>change {this.props.period}</button>
      </main>
    );
  }
}

// const mapStateToProps = function(store) {
//   return
export default connect(
  store => ({...store}),
  dispatch => ({
    updateWeather: (location, period) => {
      dispatch(actions.updateWeather(period, location))
    },
    changePeriod: (period) => {
      dispatch(actions.changePeriod(period))
    }
  })
)(App);
