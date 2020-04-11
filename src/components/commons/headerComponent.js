import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  HeaderContainer,
  LogoContainer,
  NavigationBar,
  WelcomeMessageContainer,
  Logout
} from './styles';
import { getCookie } from '../../utils/cookies';

class HeaderComponent extends Component {

  componentDidMount() {
    document.title = 'TimeOff';
  }

  render() {
    return (
      <HeaderContainer>
        <LogoContainer to='/'></LogoContainer>
        {(getCookie('role') === 'Admin')
        ?
        <NavigationBar>
          <li>
            <Link
              className={(window.location.pathname.split('/')[2] === 'dashboard')
              ? 'navlink active' : 'navlink inactive'}
              to='/admin/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link
              className={(window.location.pathname.split('/')[2] === 'list')
              ? 'navlink active' : 'navlink inactive'}
              to='/admin/list'>Employees</Link>
          </li>
          <li>
            <Link
              className={(window.location.pathname.split('/')[2] === 'new')
              ? 'navlink active' : 'navlink inactive'}
              to='/admin/new'>Add Employee</Link>
          </li>
        </NavigationBar>
        :
        <NavigationBar>
          <li>
            <Link
              className={(window.location.pathname.split('/')[2] === 'home')
              ? 'navlink active' : 'navlink inactive'}
              to='/employee/home'>Home</Link>
          </li>
          <li>
            <Link
              className={(window.location.pathname.split('/')[2] === 'profile')
              ? 'navlink active' : 'navlink inactive'}
              to='/employee/profile'>Profile</Link>
          </li>
        </NavigationBar>
        }
        {(getCookie('role') === 'Admin')
        ? 
        <WelcomeMessageContainer>Welcome <Link to='/admin/profile' className='link success'>Admin</Link>
        </WelcomeMessageContainer> 
        :
        <WelcomeMessageContainer>Welcome <Link to='/employee/profile' className='link success'>{getCookie('name')}</Link>
        </WelcomeMessageContainer>}
        <Logout to='/logout'  className='btn danger logout'>Logout</Logout>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(HeaderComponent);
