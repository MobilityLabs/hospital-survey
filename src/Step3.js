import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Step3.scss';

const QUESTIONS = {
  registration: 'How was registering and checking in?',
  waiting: 'How was the waiting experience?',
  procedure: 'How was your procedure?',
  overall: 'How was the overall experience?',
}

export default class Step3 extends Component {
  render() {
    const questionForms = _.map(QUESTIONS, (question, key) => {
      return (
        <div key={key}>
          <label className="question">{question}</label>
          <div className="radio-group">
            <label>Very Bad
              <input type="radio" value="1"/>
            </label>
            <label>Bad
              <input type="radio" value="2"/>
            </label>
            <label>Ok
              <input type="radio" value="3"/>
            </label>
            <label>Good
              <input type="radio" value="4"/>
            </label>
            <label>Great
              <input type="radio" value="5"/>
            </label>
          </div>
        </div>
      );
    })
    return (
      <div>
        <p>How would you rate the following</p>
        {questionForms}
        <Link className="button secondary" to={'/steps/2'}>Back</Link>
        <Link className="button right" to={'/steps/4'}>Next</Link>
      </div>
    )
  }
}
