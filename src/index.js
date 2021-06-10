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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
