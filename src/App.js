import React, { Component } from 'react';
import HomeLayoutContainer from './home/HomeLayoutContainer.js';

class App extends Component{
  render(){
    return(
        <div>
        <h1>Asset Management</h1>
        <HomeLayout />
        </div>
    );
  }
}
export default App;

//<HomeLayout />