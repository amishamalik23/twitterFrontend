import axios from 'axios';
import { logoutUser } from './auth';

export const API_BASE_URL ="https://twitterbackend23.herokuapp.com/api" ;
 

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      logoutUser();
      window.location.href = '/signin';
      return;
    }

    return Promise.reject(error);
  }
);

export default axios;
