import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step2 extends Component {

  submit = (e) => {
    e.preventDefault();
    this.props.history.push('/steps/3');
  }

  render() {
    return (
      <div>
        <p>We have the following info about your visit with us:</p>
        <form onSubmit={this.submit}>
          <label>When:</label><input type="datetime-local"/>
          <br/>
          <label>Where:</label>
          <select>
            <option value="1">Rappahannock General Hospital</option>
            <option value="2">Good Health Express Urgent Care Center</option>
            <option value="3">Hanover Outpatient Infusion Center</option>
            <option value="4">Ambulatory Surgery Center</option>
            <option value="5">Orthopaedic Institute Memorial Regional Medical Center</option>
          </select>
          <br/>
          <label>What:</label>
          <select>
            <option value="1">X-rays</option>
            <option value="2">CT scans</option>
            <option value="3">Nuclear medicine scans</option>
            <option value="4">MRI scans</option>
            <option value="5">Ultrasound</option>
            <option value="6">Other</option>
          </select>
          <p>If any of this information is incorrect, you can update it by using the fields above. Otherwise please click next.</p>
          <button type="submit">Next</button>
        </form>

      </div>
    )
  }
}
