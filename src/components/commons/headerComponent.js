import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import { getCookie } from '../../utils/cookies';

import './header.css';

class HeaderComponent extends Component {

  componentDidMount() {
    document.title = 'TimeOff';
  }

  render() {

    let user = JSON.parse(localStorage.getItem('user'));

    return (
      <div className='header-container'>
        <Link to='/' className='logo'></Link>
        {(user && user.role === 'Admin')
        ?
        <ul className='navbar'>
          <li><Link className={(window.location.pathname.split('/')[2] === 'dashboard') ? 'navlink active' : 'navlink inactive'} to='/admin/dashboard'>Dashboard</Link></li>
          <li><Link className={(window.location.pathname.split('/')[2] === 'list') ? 'navlink active' : 'navlink inactive'} to='/admin/list'>Employees</Link></li>
          <li><Link className={(window.location.pathname.split('/')[2] === 'new') ? 'navlink active' : 'navlink inactive'} to='/admin/new'>Add Employee</Link></li>
        </ul>
        :
        <ul className='navbar'>
          <li><Link className={(window.location.pathname.split('/')[2] === 'home') ? 'navlink active' : 'navlink inactive'} to='/employee/home'>Home</Link></li>
          <li><Link className={(window.location.pathname.split('/')[2] === 'profile') ? 'navlink active' : 'navlink inactive'} to='/employee/profile'>Profile</Link></li>
        </ul>
        }
        {(user && user.role === 'Admin')
        ? <span className='welcome uppercase'>Welcome <Link to='/admin/profile' className='link success'>Admin</Link></span> 
        : (user && user.role !== 'Admin')
		? <span className='welcome uppercase'>Welcome <Link to='/employee/profile' className='link success'>{user.name}</Link></span>
		: <span className='welcome uppercase'>Welcome</span>
	}
        <Link to='/logout' className='btn danger logout'>Logout</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(HeaderComponent);
