//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';


export const updateAdminProfileService = (request) => {

  let user = JSON.parse(localStorage.getItem('user'));

  const UPDATE_PROFILE = baseurl('admin/update');

  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    },
    body: JSON.stringify(request.data)
  };

  return fetch(UPDATE_PROFILE, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return { error: error };
    });
};
