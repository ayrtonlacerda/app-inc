import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';

import './config/ReactotronConfig';
import store from './store';
//import api from './services/api';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
