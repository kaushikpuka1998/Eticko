import React from 'react';
import ReactDOM from 'react-dom';
import loginSignUpComponent from './loginSignUpComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<loginSignUpComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});