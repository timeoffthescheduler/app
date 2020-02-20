//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';


export const addEmployeeService = (request) => {
  let user = JSON.parse(localStorage.getItem('user'));

  const NEW_ENDPOINT = baseurl('admin/new');

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    },
    body: JSON.stringify(request)
  };

  return fetch(NEW_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return error;
    });
};
