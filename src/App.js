// @flow

import React, {Component} from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.scss';

import Home from './Home';
import Steps from './Steps';
import Complete from './Complete';

export default class Routes extends Component {
  render() {
    return (
      <Router basename="/hospital-survey/">
        <div className="app-wrapper">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/steps/:stepNumber" component={Steps}/>
          <Route exact={true} path="/complete" component={Complete}/>
        </div>
      </Router>
    );
  }
}
