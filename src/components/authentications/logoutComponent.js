import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import { getCookie, setCookie } from '../../utils/cookies';
import { connect } from 'react-redux';

import { logoutAction } from '../../actions/authenticationActions';

var user = null;

class LogoutComponent extends Component {
  constructor(props) {
    super(props);
    user = JSON.parse(localStorage.getItem('user'));
    this.props.dispatch(logoutAction({id: user.id, access: user.role}));
  }

  render() {

      //localStorage.removeItem('user');
      return <Redirect to='/login' />;

  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(LogoutComponent);
