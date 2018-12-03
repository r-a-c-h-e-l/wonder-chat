import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import chatStore from './Store';
import App from './App';

describe('App - render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={chatStore}>
      <App />
      </Provider>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
