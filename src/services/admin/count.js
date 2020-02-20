//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';

export const fetchEmployeesCountService = () => {
  
  let user = JSON.parse(localStorage.getItem('user'));

  const FETCH_COUNT_ENDPOINT = baseurl(`dashboard/count?id=${user.id}`);

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    }
  };

  return fetch(FETCH_COUNT_ENDPOINT, parameters)
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
