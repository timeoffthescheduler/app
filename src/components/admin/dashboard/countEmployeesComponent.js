import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from './styles';
import { countEmployeeActions } from '../../../actions/dashboardActions';

class CountEmployeesComponent extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(countEmployeeActions());
  }

  render() {
    if (this.props.count.total === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <Card>
        <h1>{this.props.count.total}</h1>
        <p>Employees</p>
      </Card>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(CountEmployeesComponent);