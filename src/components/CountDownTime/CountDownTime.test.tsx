import React from 'react';
import ReactDOM from 'react-dom';
import CountDownTime from './CountDownTime';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountDownTime />, div);
  ReactDOM.unmountComponentAtNode(div);
});