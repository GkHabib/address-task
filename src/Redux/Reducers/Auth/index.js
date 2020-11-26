import generateActionTypes from '../../Actions/Helper/GenerateActionTypes';

const loginActionTypes = generateActionTypes('LOGIN');
const tokenActionTypes = generateActionTypes('ACCESS_TOKEN');
const podLoginActionType = 'POD_LOGIN_SUCCESSFUL';
const LOGOUT = 'LOGOUT';

const initAuthState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('Authenticated') === 'true',
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('jwtRefresh'),
  redirectUrl: '/',
  errorMessage: '',
  user: {},
};

const Auth = (state = initAuthState, action) => {
  switch (action.type) {
    // case SET_REDIRECT_URL:
    //   return Object.assign({}, state, {
    //     redirectUrl: action.redirectUrl,
    //   });
    case loginActionTypes.request:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: '',
      });
    case tokenActionTypes.request:
      return Object.assign({}, state, {
        isFetching: true,
        errorMessage: '',
      });
    case loginActionTypes.create:
      localStorage.setItem('accessToken', action.payload.data.access_token);
      localStorage.setItem('Authenticated', 'true');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        accessToken: action.payload.data.access_token,
        user: action.payload.data.address_user,
      });
    case tokenActionTypes.create:
      localStorage.setItem('accessToken', action.payload.data.access_token);
      localStorage.setItem('Authenticated', 'true');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        accessToken: action.payload.data.access,
        // refreshToken: action.payload.refresh,
      });
    case loginActionTypes.error:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case tokenActionTypes.error:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case LOGOUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('Authenticated');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        accessToken: '',
        refreshToken: '',
      });
    default:
      return state;
  }
};

export default Auth;
