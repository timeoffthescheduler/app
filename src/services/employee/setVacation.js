//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';


export const setVacationsService = (request) => {
  
  let user = JSON.parse(localStorage.getItem('user'));

  const SET_VACATION = baseurl('employee/vacation');

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    },
    body: JSON.stringify(request)
  };

  return fetch(SET_VACATION, parameters)
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
