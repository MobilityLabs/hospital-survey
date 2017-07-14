import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Step1 extends Component {

  submit = (e) => {
    e.preventDefault();
    this.props.history.push('/steps/2');
  }

  render() {
    return (
      <div>
        <p>Hi {this.props.name},</p>

        <p>Can you verify your birthdate?</p>
        <form onSubmit={this.submit}>
          <input type="number" min="1" max="12" placeholder="MM" required={true}/>/
          <input type="number" min="1" max="31" placeholder="DD" required={true}/>/
          <input type="number" min="00" max="99" placeholder="YY" required={true}/>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  }
}
