import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from './store/reducers'
import watchers from './store/sagas'
import createSageMiddleware from 'redux-saga'

const saga = createSageMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(watchers);


ReactDOM.render(
      <Provider store={store}>
          <App/>
      </Provider>,
  document.getElementById('root')
);

reportWebVitals();
