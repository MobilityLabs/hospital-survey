import _ from 'lodash';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const QUESTIONS = {
  registration: [
    'It took too long',
    'The team was unfriendly',
    'I had already given this information',
  ],
  waiting: [
    'It took too long',
    'The area was dirty',
    'I would have preferred different reading materials',
  ],
  procedure: [
    'It took too long',
    'My technician was not friendly',
    'My technician did not tell me what to expect',
    'I felt uncomfortable',
  ],
  overall: [
    'It took too long',
    'The team was unfriendly',
    'The area was dirty',
  ],
}

export default class Step4 extends Component {
  render() {
    const questionKey = Object.keys(_.minBy(this.props.scores, (score, k) => {return score;}))[0];
    return (
      <div>
        <h2>What things weren't satisfactory about {questionKey}</h2>
        <form>
          {
            QUESTIONS[questionKey].map((v, k) => {
              return (
                <label>
                  <input type="checkbox" value=""/>
                  {v}
                </label>
              )
            })
          }
          <label>Can you describe the issues?</label>
          <textarea/>
        </form>
        <Link className="button" to={'/steps/5'}>Next</Link>
        <Link className="button secondary right" to={'/steps/3'}>Back</Link>
      </div>
    )
  }
}
