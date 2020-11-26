import createAxiosInstance from "../../../../Redux/Actions/Helper/axios";
import generateActionTypes from '../../../../Redux/Actions/Helper/GenerateActionTypes';

const actionTypes = generateActionTypes('AUTH_KEY');
const ccActionTypes = generateActionTypes('LOGIN');


const postNewAuthenticationCodeRequest = (phoneNumber) => dispatch => {
  dispatch({
    type: actionTypes.request,
  });
  const ax = createAxiosInstance();
  return ax.post('/address_users/activation_code', !phoneNumber ? undefined : { mobile_number: phoneNumber }).then(response => {
    dispatch({
      payload: response.data,
      type: actionTypes.receive,
    });
  }).catch(e => {
    console.log(e);
    dispatch({
      payload: e,
      error: true,
      type: actionTypes.error,
    });
  });
};


const postConfirmationCodeRequest = (confirmationCode, mobileNumber) => dispatch => {
  dispatch({
    type: ccActionTypes.request,
  });
  const ax = createAxiosInstance();
  return ax.post('/address_users/activation', !confirmationCode ? undefined : { activation_code: confirmationCode, mobile_number: mobileNumber }).then(response => {
    dispatch({
      payload: response.data,
      type: ccActionTypes.create,
    });
  }).catch(e => {
    console.log(e);
    dispatch({
      payload: e,
      error: true,
      type: ccActionTypes.error,
    });
  });
};

export {
  postNewAuthenticationCodeRequest,
  postConfirmationCodeRequest,
};
