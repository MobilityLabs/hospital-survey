import React, {Component} from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.scss';

import Home from './Home';
import Steps from './Steps';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/steps/:step_number" component={Steps}/>
        </div>
      </Router>
    )
  }
}
