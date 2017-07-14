import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import StepCounter from './StepCounter';

export default class Steps extends Component {
  state = {
    name: 'Sean',
    scores: [
      {
        registration: 1
      },
      {
        waiting: 2
      },
      {
        procedure: 3
      },
      {
        overall: 4
      },
    ]
  }
  render() {
    const {stepNumber} = this.props.match.params;
    let Step;
    switch (stepNumber) {
    case '2':
      Step = <Step2 {...this.state} {...this.props}/>;
      break;
    case '3':
      Step = <Step3 {...this.state} {...this.props}/>;
      break;
    case '4':
      Step = <Step4 {...this.state} {...this.props}/>;
      break;
    case '5':
      Step = <Step5 {...this.state} {...this.props}/>;
      break;
    default:
      Step = <Step1 {...this.state} {...this.props}/>;
    }
    return (
      <div>
        <StepCounter stepNumber={stepNumber}/>
        {Step}
      </div>
    );
  }
}
