import React from 'react';
import ReactDOM from 'react-dom';
import SalePortion from './SalePortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SalePortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});