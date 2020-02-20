import React from 'react';
import { Link } from 'react-router-dom';

//import { getCookie } from '../../../utils/cookies';

import './profile.css';

//let user = JSON.parse(localStorage.getItem('user'));

const ProfileView = ({ employee , id }) => (
  <div className='profile'>
    <table className='table'>
      <tbody>
          <tr>
            <th>Name</th><td className='uppercase'>{employee.name}</td>
          </tr>
          <tr>
            <th>Email</th><td className=''>{employee.email}</td>
          </tr>
          <tr>
            <th>Position</th><td className='uppercase'>{employee.position}</td>
          </tr>
          <tr>
            <th>Role</th><td>{employee.role}</td>
          </tr>
          <tr>
            <th>Username</th><td>{employee.username}</td>
          </tr>
          {(employee.active !== false)
            ? 
            <tr>
              <th></th><td><Link className='link success' to={`/employee/update/${id}`}>Edit</Link></td>
            </tr>
            : null
          }
      </tbody>
    </table>


    
  </div>
);

export default ProfileView;
