import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { checkCookie } from '../../../utils/cookies';
import Button from '../../commons/buttons/button';
import { AuthContainer, LogoContainer, AuthForm } from '../assets/guest-styles';
import { Forgot } from './styles';

const LoginView = (props) => (
  <AuthContainer>
    <LogoContainer to="/"><img src="../assets/images/guest-logo.png" alt="Timeoff" /></LogoContainer>
    {(checkCookie() !== null) ? <Redirect to='/admin/dashboard' /> : null}
    {(!props.isSuccess) ? <div className='error'>{props.message}</div> : null}
    <AuthForm onSubmit={props.handleLogin}>
      <div>
        <input type="text" name="username" placeholder="Username" className="fields" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" className="fields" />
      </div>
      <div>
        <Button classes='btn success' buttonLabel='Save' />
      </div>
      <p>
        <Forgot to='forgot' className='link success'>Forgot your password?</Forgot>
      </p>
    </AuthForm>
  </AuthContainer>
);

export default LoginView;