//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';

export const deleteVacationService = (request) => {

  let user = JSON.parse(localStorage.getItem('user'));

  const FETCH_VACATION = baseurl('employee/vacation');

  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    },
    body: JSON.stringify(request.id)
  };

  return fetch(FETCH_VACATION, parameters)
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
