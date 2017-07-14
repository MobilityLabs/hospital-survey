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
        <form onSubmit={this.submit}>
          <label>First things first, can you verify your birthdate?
            <input type="date" name="birthdate" max="2017-06-01" required={true}/>
          </label>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}
