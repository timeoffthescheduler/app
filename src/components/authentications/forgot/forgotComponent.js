import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { forgotPasswordAction } from '../../../actions/authenticationActions';
import { AuthContainer, LogoContainer, AuthForm } from '../assets/guest-styles';
import { ButtonReset } from './styles';

class ForgotComponent extends Component {
  state = {
    success: false,
    message: ''
  }

  renew = (event) => {
    event.preventDefault();
    const data = {
      password: event.target.password.value,
      username: event.target.username.value
    }

    this.props.dispatch(forgotPasswordAction(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.forgot.hasOwnProperty('response')) {
      if (nextProps.forgot.response.success !== prevState.success) {
        return {
          success: nextProps.forgot.response.success,
          message: nextProps.forgot.response.message
        };
      } else {
        return {
          success: nextProps.forgot.response.success,
          message: nextProps.forgot.response.message
        };
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <AuthContainer>
        <div className={(this.state.success) ? 'error success' : 'error'}>{this.state.message}</div>
        <LogoContainer to='/'><img src="../assets/images/guest-logo.png" alt="Timeoff" /></LogoContainer>
        <AuthForm onSubmit={this.renew.bind(this)}>
          <input type='text' name='username' placeholder='Enter username' className='fields' />
          <input type='password' name='password' placeholder='Enter new password' className='fields' />
          <ButtonReset classes='btn success' buttonLabel='Reset password' />
        </AuthForm>
        <div>
          <Link to='login' className='link success'>Login</Link>
        </div>
      </AuthContainer>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(ForgotComponent);