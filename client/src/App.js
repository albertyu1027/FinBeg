import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import World from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

// const App = () => (
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={LoginForm} />
//         <Route exact path="/dash" component={Dashboard} />

//       </Switch>
//     </div>
//   </Router>
// );

export default App;
