import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signup />, div);
  ReactDOM.unmountComponentAtNode(div);
});