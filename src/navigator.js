import React , {Component} from 'react';
import App from './App.js';
import HomeLayoutContainer from './home/HomeLayoutContainer.js';
import Hai from './test/hai';
import Hello from './test/hello';

import { HashRouter, Route } from 'react-router-dom';

class Navigator extends Component{
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={HomeLayoutContainer} />
        <Route path = "/hai" component = {Hai}/>
        <Route path = "/hello" component = {Hello} />
      </HashRouter>
    );
  }
}

export default Navigator;
