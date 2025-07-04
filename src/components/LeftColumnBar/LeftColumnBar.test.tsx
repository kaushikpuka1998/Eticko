import React from 'react';
import ReactDOM from 'react-dom';
import LeftColumnBar from './LeftColumnBar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeftColumnBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});