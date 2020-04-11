import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from './styles';
import { onlineEmployeesAction } from '../../../actions/dashboardActions';

class OnlineEmployeesComponent extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(onlineEmployeesAction());
  }

  render() {
    return (
      <Card>
        <h1>{this.props.online.online}</h1>
        <p>Employees Online</p>
      </Card>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(OnlineEmployeesComponent);
