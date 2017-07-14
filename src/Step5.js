import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step5 extends Component {
  render() {
    return (
      <div>
        <p>Thank you for your feedback.</p>
        <p>Do you have any other feedback for our team?</p>
        <textarea/>
        <Link to={'/steps/4'}>Back</Link>
        <Link to={'/complete'}>Complete</Link>
      </div>
    )
  }
}
