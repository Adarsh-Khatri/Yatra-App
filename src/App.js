import React, { Component } from 'react';
import store from './store.js'
import { Provider } from 'react-redux';
import './app.css'
import MainComponent from './components/MainComponent'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    )
  }
}
