import createAxiosInstance from './axios';
// import config from 'config';
import { getLanguage } from '../../../assets/Language/Helper';

// An abstract class for making apiCalls

class ParameterizedRequest {
  // eslint-disable-next-line max-len
  constructor(actionTypes, dispatch, url, method = 'GET', body = undefined, onDone = undefined, customBaseURL = undefined, customHeaders = {}) {
    this.parameterizedRequest = true;
    this.customBaseURL = customBaseURL;
    this.customHeaders = customHeaders;
    this.actionTypes = actionTypes;
    this.dispatch = dispatch;
    this.url = url;
    this.method = method;
    this.body = body;
    this.onDone = onDone;
  }
  // !!!!! NOTICE THIS: !!!!!
  // actionTypes = {
  //    request,
  //    responseSuccessful,
  //    responseError,
  // }

  generateAction = async () => {
    try {
      // const ax = new AxiosModuleBuilder();
      const ax = createAxiosInstance(this.customBaseURL, this.customHeaders);
      const response = await ax[this.method.toLowerCase()](this.url, !this.body ? undefined : this.body);
      return {
        payload: response.data,
        type: this.actionTypes[1],
      };
    } catch (e) {
      return {
        payload: e,
        error: true,
        type: this.actionTypes[2],
      };
    }
  };

  send = async () => {
    if (this.dispatch) this.dispatch({ type: this.actionTypes[0] });
    const actionResponse = await this.generateAction();
    if (this.dispatch) this.dispatch(actionResponse);
    if (this.onDone) this.onDone(actionResponse, this.dispatch);
    return actionResponse;
  };
}

export default ParameterizedRequest;
