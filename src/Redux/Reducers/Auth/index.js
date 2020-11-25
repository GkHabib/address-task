import {
  generateActionTypes,
} from '../../Actions/Helper/GenerateActionTypes';

const loginActionTypes = generateActionTypes('LOGIN');
const tokenActionTypes = generateActionTypes('ACCESS_TOKEN');
const podLoginActionType = 'POD_LOGIN_SUCCESSFUL';
const LOGOUT = 'LOGOUT';

const initAuthState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('Authenticated') === 'true',
  accessToken: localStorage.getItem('jwtAccess'),
  refreshToken: localStorage.getItem('jwtRefresh'),
  redirectUrl: '/',
  errorMessage: '',
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
      localStorage.setItem('jwtAccess', action.payload.data.access);
      localStorage.setItem('jwtRefresh', action.payload.data.refresh);
      localStorage.setItem('Authenticated', 'true');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        accessToken: action.payload.data.access,
        refreshToken: action.payload.data.refresh,
      });
    case tokenActionTypes.create:
      localStorage.setItem('jwtAccess', action.payload.data.access);
      // localStorage.setItem('jwtRefresh', action.payload.refresh);
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
      localStorage.removeItem('jwtAccess');
      localStorage.removeItem('jwtRefresh');
      localStorage.removeItem('Authenticated');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        accessToken: '',
        refreshToken: '',
      });
    case podLoginActionType:
      localStorage.setItem('jwtAccess', action.payload);
      localStorage.setItem('Authenticated', 'true');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        accessToken: action.payload.access.data,
        refreshToken: action.payload.refresh.data,
      });
    default:
      return state;
  }
};

export default Auth;
