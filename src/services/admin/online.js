//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';


export const fetchOnlineEmployeesService = () => {
  
  let user = JSON.parse(localStorage.getItem('user'));

  const FETCH_ONLINE_EMPLOYEES = baseurl(`dashboard/online?id=${user.id}`);

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    }
  };

  return fetch(FETCH_ONLINE_EMPLOYEES, parameters)
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
