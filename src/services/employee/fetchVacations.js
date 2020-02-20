//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';

export const fetchVacationsService = (request) => {

  let user = JSON.parse(localStorage.getItem('user'));

  const FETCH_VACATIONS = baseurl(`employee/vacation?id=${request.id.id}`);

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    }
  };

  return fetch(FETCH_VACATIONS, parameters)
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
