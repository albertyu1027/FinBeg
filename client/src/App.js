import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Portfolio from './Portfolio'


class App extends Component {
  render() {
    return (
    <div className="App">

    <Portfolio />

    </div>
    );
  }
}

export default App;
