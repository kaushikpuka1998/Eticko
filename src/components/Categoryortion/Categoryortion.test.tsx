import React from 'react';
import ReactDOM from 'react-dom';
import Categoryortion from './Categoryortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Categoryortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});