import React from 'react';
import ReactDOM from 'react-dom';
import PromisePortion from './PromisePortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PromisePortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});