import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step2 extends Component {
  render() {
    return (
      <div>
        <p>We have the following info about your visit with us:</p>
        <label>When:</label><span>Monday, July 3, 2017</span>
        <br/>
        <label>Where:</label><span>Rappahannock General Hospital</span>
        <br/>
        <label>What:</label><span>X-ray</span>

        <p>If any of this information is incorrect, you can update it by clicking on the edit symbol. Otherwise please click next.</p>

        <Link to={'/steps/3'}>Next</Link>
      </div>
    )
  }
}
