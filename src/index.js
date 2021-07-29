import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "tachyons";
import App from "./Containers/App";
import { searchRobots, requestRobots } from './Containers/reducers';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = 
  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* ACTION -> REDUCER -> STORE -> MAKE CHANGES
A (user clicks sth), 
R (function that takes input from action and returns output to store)
S (an object that describes state of our app)
MAKE CHANGES (implements the changes based on the previous steps)


IRL we have many reducers, so we combine them all into one root reducer, which we
keep in the store object

By inserting store as a prop of provider, we are able to pass down the store 
down the component tree without doing it manually (to all components)



*/