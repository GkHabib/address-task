import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './Pages/App/index';
import rootReducer from './Redux/Reducers/index';
import './index.css';
import './Pages/App/Components/font.scss';

const mainStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);


ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={mainStore}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
