import { combineReducers } from 'redux';
import { appearanceReducer } from './Appearance/index';
import Auth from './Auth/index';

const rootReducer = combineReducers({
  appearance: appearanceReducer,
  auth: Auth,
});

export default (state, action) => rootReducer(action.type === 'LOGOUT' ? undefined : state, action);
