//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';


export const fetchAdminProfileService = (request) => {
  
  let user = JSON.parse(localStorage.getItem('user'));

  const FETCH_PROFILE = baseurl(`admin/profile?id=${request.data.id}&access=${request.data.access}`);

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    }
  };

  return fetch(FETCH_PROFILE, parameters)
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
