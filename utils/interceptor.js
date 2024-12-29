import axios from "axios";

let baseURL = "https://softgenie.org/api/";

const httpClient = axios.create({ baseURL });

// Create a request interceptor

const requestInterceptor = httpClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    console.log("Error here");
    return Promise.reject(error);
  }
);

// Create a response interceptor
const responseInterceptor = httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      // Do something with response error
      console.log("Error here");
    } else if (error.response.status === 404) {
    } else if (error.response.status === 500) {
    } else if (error.response.status === 400) {
    }
    // Do something with response error
    else {
      return Promise.reject(error);
    }
  }
);

export default httpClient;
