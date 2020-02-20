export function baseurl(endpoint) {
  const local = 'http://localhost:3000/api/v1/';

  return `${local}${endpoint}`;
}
