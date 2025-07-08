import React from 'react';
import ReactDOM from 'react-dom';
import Electronics from './Electronics';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Electronics />, div);
  ReactDOM.unmountComponentAtNode(div);
});