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
        <h1>
          <small>Hi {this.props.name}! You visited us recently</small>
          We need your help to continually improve our hospital experience
        </h1>
        <p>First things first, can you verify your birthdate?</p>
        <form onSubmit={this.submit}>
          <input type="number" min="1" max="12" placeholder="MM" required={true}/>/
          <input type="number" min="1" max="31" placeholder="DD" required={true}/>/
          <input type="number" min="00" max="99" placeholder="YY" required={true}/>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}
