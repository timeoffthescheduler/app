import React, { Component } from 'react';
import HeaderComponent from '../../commons/headerComponent';
import { adminProfileAction } from '../../../actions/adminActions';
import { connect } from 'react-redux';
//import { getCookie } from '../../../utils/cookies';
import AdminProfileView from './adminProfileView';

var user = null;
class AdminProfileComponent extends Component {
  constructor(props) {
    super(props);
    user = JSON.parse(localStorage.getItem('user'));

    this.props.dispatch(adminProfileAction({
      id: user.id,
      access: user.role
    }));
  }

  render() {
    if (this.props.profile.action === undefined) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <HeaderComponent />
        <AdminProfileView
          profile={this.props.profile.action.response}
          match={this.props.match} 
	  id={user.id}
        />
      </div>
    );
  }
}

const mapStateToPrope = (state) => (state);

export default connect(mapStateToPrope)(AdminProfileComponent);
