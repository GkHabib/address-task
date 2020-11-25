import createAxiosInstance from "../../../../Redux/Actions/Helper/axios";
import generateActionTypes from '../../../../Redux/Actions/Helper/GenerateActionTypes';

const actionTypes = generateActionTypes('AUTH_KEY');

const postNewAuthenticationCodeRequest = (phoneNumber) => async dispatch => {
  try {
    // const ax = new AxiosModuleBuilder();
    const ax = createAxiosInstance({}, {});
    const response = await ax.post('/address_users/activation', !phoneNumber ? undefined : { phoneNumber });
    dispatch({
      payload: response.data,
      type: actionTypes.receive,
    });
  } catch (e) {
    dispatch({
      payload: e,
      error: true,
      type: actionTypes.error,
    });
  }
};


export {
  postNewAuthenticationCodeRequest,
};
