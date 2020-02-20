import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminProfileAction, adminProfileUpdateAction } from '../../../../actions/adminActions';
import AdminUpdateView from './adminUpdateView';
import HeaderComponent from '../../../commons/headerComponent';

//import { getCookie } from '../../../../utils/cookies';

var user = null;

class AdminUpdateComponent extends Component {
  constructor(props) {
    super(props);
    user = JSON.parse(localStorage.getItem('user'));
    this.props.dispatch(adminProfileAction({
      id: this.props.match.params.id,
      access: user.role
    }));
  }

  handleUpdateAdmin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      role: event.target.role.value,
      password: event.target.password.value,
      access: user.role,
      id: user.id
    };

    this.props.dispatch(adminProfileUpdateAction(data));
  }

  render() {
    let success, message;
    if (this.props.updateProfile.hasOwnProperty('action')) {
      success = this.props.updateProfile.action.response.success;
      message = this.props.updateProfile.action.response.message;
    }
    
    return (
      <div>
        <HeaderComponent />
        <AdminUpdateView
          profile={this.props.profile.action.response}
          handleUpdateAdmin={this.handleUpdateAdmin}
          success={success}
          message={message} 
	  role={user.role}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(AdminUpdateComponent);
