import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import World from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Base from './Base/Base'


class App extends Component {
  render() {
    return (
      <div className="App">

      <Base />

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
