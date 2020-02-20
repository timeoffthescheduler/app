//import { getCookie } from '../../utils/cookies';
import { baseurl } from '../../utils/baseurl';


export const searchService = (request) => {

  let user = JSON.parse(localStorage.getItem('user'));

  const SEARCH_ENDPOINT = baseurl('admin/search');

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.token
    },
    body: JSON.stringify(request.search)
  };

  return fetch(SEARCH_ENDPOINT, parameters)
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
