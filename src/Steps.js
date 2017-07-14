import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Steps extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.step_number || 'Missing step number'}
      </div>
    )
  }
}
