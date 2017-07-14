import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

export default class Steps extends Component {
  state = {
    name: 'Sean',
    scores: {
      registration: null,
      waiting: null,
      procedure: null,
      overall: null,
    }
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
    console.log(Step);
    return (
      <div>
        {Step}
      </div>
    )
  }
}