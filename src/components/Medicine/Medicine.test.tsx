import React from 'react';
import ReactDOM from 'react-dom';
import Medicine from './Medicine';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Medicine />, div);
  ReactDOM.unmountComponentAtNode(div);
});