import React from 'react';
//import { getCookie } from '../../../../utils/cookies';

import './update.css';

//let user = JSON.parse(localStorage.getItem('user'));

const AdminUpdateView = ({profile, handleUpdateAdmin, success, message, role}) => (
  <div className='container profile-update'>
    <div className={(success) ? 'message success' : 'message error'}>{message}</div>
    <form onSubmit={handleUpdateAdmin}>
      <div>
        <label>Username</label>
        <input type="text" name="username" defaultValue={profile.username} className="fields" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" defaultValue={profile.email} className="fields" />
      </div>
      <div>
        <label>Role</label>
        {(role === 'Admin')
          ?
          <select name="role" className="dropdown" defaultValue={profile.role}>
            <option>Select</option>
            <option value="Client">Client</option>
            <option value="Admin">Admin</option>
          </select>
          :
          <input type="text" name="role" readOnly value={profile.role} className="fields" />
        }
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" className="fields" placeholder="Enter old or new password" />
      </div>
      <div>
        <button className='btn success'>Update</button>
      </div>
    </form>
  </div>
);

export default AdminUpdateView;
