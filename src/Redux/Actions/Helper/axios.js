import axios from 'axios';
import URLs from '../../../Config/Config';

const { baseURL } = URLs;
// const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://ape.lamasoo.com';
// const baseURL2 = '';

const createAxiosInstance = (customBaseURL = undefined, customHeaders = undefined) => {
  const instance = (
    axios.create({
      baseURL: customBaseURL !== undefined ? customBaseURL : baseURL.toString(),
      headers: customHeaders,
    }));
  const jwtToken = localStorage.getItem('accessToken');
  const languageLocal = localStorage.getItem('langLocal');
  if (jwtToken) {
    instance.defaults.headers.common.Authorization = 'Bearer '.concat(jwtToken);
  }
  if (languageLocal !== undefined) {
    instance.defaults.headers.common['Accept-Language'] = languageLocal;
  }
  return instance;
};
export { baseURL };
export default createAxiosInstance;
