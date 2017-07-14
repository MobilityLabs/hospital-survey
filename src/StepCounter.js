import React, {Component} from 'react';

export default class StepCounter extends Component {

  render() {
    return (
      <div>
        {this.props.stepNumber}/5
      </div>
    )
  }
}
