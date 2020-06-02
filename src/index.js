import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './store'
import { setViewFilter, ViewFilters } from './actions'
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = ViewFilters

console.log(store)
store.dispatch(setViewFilter(SHOW_COMPLETED))
console.log(store.getState())
store.dispatch(setViewFilter(SHOW_ACTIVE))
console.log(store.getState())
store.dispatch(setViewFilter(SHOW_ALL))
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


