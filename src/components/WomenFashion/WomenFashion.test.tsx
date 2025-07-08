import React from 'react';
import ReactDOM from 'react-dom';
import WomenFashion from './WomenFashion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WomenFashion />, div);
  ReactDOM.unmountComponentAtNode(div);
});