import React from 'react';
import ReactDOM from 'react-dom';
import HomeLifestyle from './HomeLifestyle';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeLifestyle />, div);
  ReactDOM.unmountComponentAtNode(div);
});