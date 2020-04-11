import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import HeaderComponent from '../../commons/headerComponent';
import CountEmployeesComponent from './countEmployeesComponent';
import OnlineEmployeesComponent from './onlineEmployeesComponent';
import ActivitiesComponent from './activitiesComponent';

import { getCookie } from '../../../utils/cookies';

import { Dashboard } from './styles';

class DashboardComponent extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        {(getCookie('role') === 'Admin')
        ?
        <Dashboard className='dashboard'>
          <CountEmployeesComponent />
          <OnlineEmployeesComponent />
          <ActivitiesComponent />
        </Dashboard>
        :
        <div><Redirect to='/employee/home' /></div>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(DashboardComponent);
