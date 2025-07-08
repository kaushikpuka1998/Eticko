import React from 'react';
import ReactDOM from 'react-dom';
import ExploreProductPortion from './ExploreProductPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExploreProductPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});