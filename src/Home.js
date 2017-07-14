import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          We put this together because we had an unpleasant experience with a post hospital visit survey.
        </h1>
        <p>We are hoping to use this as a prototype of what a better experience could be.</p>
        <Link to="/steps/1" className="button">Let's get started</Link>
      </div>
    );
  }
}
