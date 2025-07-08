import React from 'react';
import ReactDOM from 'react-dom';
import MenFashion from './MenFashion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenFashion />, div);
  ReactDOM.unmountComponentAtNode(div);
});