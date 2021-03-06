import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeDetailsAction, employeeUpdateAction } from '../../../actions/employeesActions';

import HeaderComponent from '../../commons/headerComponent';
import EmployeeDetailsUpdateView from './employeeDetailsUpdateView';

import { getCookie } from '../../../utils/cookies';

class EmployeeDetailsUpdateComponent extends Component {

  state = {
    isSuccess: false,
    message: '',
    employee: {}
  }

  componentDidMount() {
    this.props.dispatch(employeeDetailsAction({ employeeID: this.props.match.params.id }));
  }

  onHandleUpdateEmployee = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let position = event.target.position.value;
    let username = event.target.username.value;
    let password = event.target.password.value;
    let email = event.target.email.value;
    let role = event.target.role.value;
    let _id = this.props.response.details.response._id;

    const data = {
      name, position, username, password, role, _id, email,
      admin: {
        access: getCookie('role'),
        id: getCookie('id')
      }
    };

    this.props.dispatch(employeeUpdateAction(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.response.update.hasOwnProperty('response')) {
      if (nextProps.response.update.response.success !== prevState.isSuccess) {
        return {
          isSuccess: nextProps.response.update.response.success,
          message: nextProps.response.update.response.message,
          employee: nextProps.response.details.response
        };
      } else {
        return {
          isSuccess: nextProps.response.update.response.success,
          message: nextProps.response.update.response.message
        };
      }
    } else {
      return null;
    }
  }

  render() {
    if (this.props.response.details.response === undefined) {
      return <div>Loading...</div>
    }
    
    return (
      <div>
        <HeaderComponent />
        <EmployeeDetailsUpdateView
          message={this.state.message}
          success={this.state.isSuccess}
          handleUpdateEmployee={this.onHandleUpdateEmployee}
          employee={this.props.response.details.response}
         />
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(EmployeeDetailsUpdateComponent);
