import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const QUESTIONS = {
  overall: 'How was it fam',
  procedure: 'How was it fam',
  registration: 'How was it fam',
  waiting: 'How was it fam',
}

export default class Step3 extends Component {
  render() {
    const questionForms = {
      QUESTIONS.keys(k).map(function(k, v) {<label key={q.k}>{q.v}</label>})
    }
  }
    return (
      <div>
        <p>How would you rate the following</p>
        <ol>
        {questionForms}
          <li>
            <label>Registering for your procedure?</label>
            <input type="radio" value="1" checked={true} />
            <input type="radio" value="2" checked={true} />
            <input type="radio" value="3" checked={true} />
            <input type="radio" value="4" checked={true} />
            <input type="radio" value="5" checked={true} />
          </li>
        </ol>
        <Link to={'/steps/2'}>Back</Link>
        <Link to={'/steps/4'}>Next</Link>
      </div>
    )
  }
}
