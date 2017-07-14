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
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/steps/:stepNumber" component={Steps}/>
          <Route exact path="/complete" component={Complete}/>
        </div>
      </Router>
    )
  }
}
