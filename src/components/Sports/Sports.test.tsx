import React from 'react';
import ReactDOM from 'react-dom';
import Sports from './Sports';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sports />, div);
  ReactDOM.unmountComponentAtNode(div);
});