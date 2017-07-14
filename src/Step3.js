import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step3 extends Component {
  render() {
    return (
      <div>
        <p>How would you rate the following</p>
        <ol>
          <li>
            <label>Registering for your procedure?</label>
            <input type="radio" value="1" checked={true} />
            <input type="radio" value="2" checked={true} />
            <input type="radio" value="3" checked={true} />
            <input type="radio" value="4" checked={true} />
            <input type="radio" value="5" checked={true} />
          </li>
        </ol>
        <Link to={'/steps2'}>Back</Link>
        <Link to={'/steps/4'}>Next</Link>
      </div>
    )
  }
}
