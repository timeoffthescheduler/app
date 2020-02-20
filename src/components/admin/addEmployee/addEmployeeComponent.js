import React, { Component } from 'react';
import HeaderComponent from '../../commons/headerComponent';
import { connect } from 'react-redux';

import { saveEmployeeAction } from '../../../actions/adminActions';
import AddEmployeeView from './addEmployeeView';
//import { getCookie } from '../../../utils/cookies';

class NewEmployeeComponent extends Component {
  state = {
    success: false,
    message: '',
    name: '',
    position: '',
    role: '',
    username: '',
    password: '',
    email: ''
  }

  onHandleAddEmployee = (event) => {
    event.preventDefault();
    
    let name = event.target.name.value;
    let position = event.target.position.value;
    let role = event.target.role.value;
    let username = event.target.username.value;
    let password = event.target.password.value;
    let email = event.target.email.value;

    this.setState({
      name: name,
      position: position,
      role: role
    }, () => {
    
	let user = JSON.parse(localStorage.getItem('user'));

      const data = {
        name, role, position, username, password, email,
        admin: {
          access: user.role,
          id: user.id
        }
      };
      
      this.props.dispatch(saveEmployeeAction(data));
    });
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.name.value
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.response.admin.hasOwnProperty('response')) {
      if (nextProps.response.admin.response.success !== prevState.success) {
        return {
          success: nextProps.response.admin.response.success,
          message: nextProps.response.admin.response.message,
          name: '',
          position: '',
          role: '',
          username: '',
          password: '',
          email: ''
        };
      } else {
        return {
          success: nextProps.response.admin.response.success,
          message: nextProps.response.admin.response.message
        };
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <AddEmployeeView
          handleAddEmployee={this.onHandleAddEmployee}
          message={this.state.message}
          success={this.state.success}
          name={this.state.name}
          position={this.state.position}
          role={this.state.role}
          username={this.state.username}
          password={this.state.password}
          email={this.state.email}
          handleChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(NewEmployeeComponent);
