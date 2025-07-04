import React from 'react';
import ReactDOM from 'react-dom';
import LeftColumnButton from './LeftColumnButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeftColumnButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});