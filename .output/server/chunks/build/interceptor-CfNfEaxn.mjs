import axios from 'axios';

var httpClient = axios.create({ baseURL: "https://softgenie.org/api/" });
httpClient.interceptors.request.use((config) => {
  return config;
}, (error) => {
  console.log("Error here");
  return Promise.reject(error);
});
httpClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401 || error.response.status === 403) console.log("Error here");
  else if (error.response.status === 404) ; else if (error.response.status === 500) ; else if (error.response.status === 400) ; else return Promise.reject(error);
});

export { httpClient as h };
//# sourceMappingURL=interceptor-CfNfEaxn.mjs.map
