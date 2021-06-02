import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import './index.css';
import 'react-notifications/lib/notifications.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, {history} from './store/configStore';

const app = (
  <Provider store = {store}>
    <ConnectedRouter history = {history} >
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render( app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
