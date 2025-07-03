import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from './InputBox';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});