import axios from 'axios';
import URLs from '../../../Config/config';

const { baseURL } = URLs;
// const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://ape.lamasoo.com';
// const baseURL2 = '';

const createAxiosInstance = (customBaseURL, customHeaders) => {
  const instance = (
    axios.create({
      baseURL: customBaseURL !== undefined ? customBaseURL : baseURL,
      headers: customHeaders,
    }));
  const jwtToken = localStorage.getItem('jwtAccess');
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
