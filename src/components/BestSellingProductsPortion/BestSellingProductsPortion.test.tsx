import React from 'react';
import ReactDOM from 'react-dom';
import BestSellingProductsPortion from './BestSellingProductsPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BestSellingProductsPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});