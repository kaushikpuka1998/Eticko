import React from 'react';
import ReactDOM from 'react-dom';
import HeadNavBar from './HeadNavBar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeadNavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});