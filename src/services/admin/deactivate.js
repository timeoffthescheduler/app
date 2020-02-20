//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';


export const deactivateService = (request) => {
  
  let user = JSON.parse(localStorage.getItem('user'));

  const DEACTIVATE_ENDPOINT = baseurl('admin/deactivate');

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    },
    body: JSON.stringify(request.id)
  };

  return fetch(DEACTIVATE_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return { error: error };
    })
};
