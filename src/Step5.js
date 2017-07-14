import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step5 extends Component {
  render() {
    return (
      <div>
        <h2>Thank you for your feedback.</h2>
        <label>Do you have any other feedback for our team?</label>
        <textarea/>
        <br/>
        <Link className="button" to={'/complete'}>Complete</Link>
        <Link className="button secondary right" to={'/steps/4'}>Back</Link>
      </div>
    )
  }
}
