import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Complete extends Component {

  render() {
    return (
      <div>
        <h2>We have saved your feedback.</h2>
        <p>If you have additional questions for us about your visit please contact us at: <a href="mailto:wecare@hospital.com">WeCare@hospital.com</a></p>
        <p>If you have questions about your test results please contact your provider.</p>
      </div>
    )
  }
}
