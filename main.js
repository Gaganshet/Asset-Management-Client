import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Navigator from './src/navigator';
import { Provider } from 'react-redux';
import './src/style/homeLayout.css';
import RootReducer from './src/rootReducer.js';
import { createStore } from 'redux';

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store = {store}>
      <Navigator />
  </Provider>, document.getElementById('assetManagement'));

