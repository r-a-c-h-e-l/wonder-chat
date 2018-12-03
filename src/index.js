import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import chatStore from './Store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={chatStore}>
    <App/>
  </Provider>, document.getElementById('root')
);
