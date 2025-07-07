import React from 'react';
import ReactDOM from 'react-dom';
import ItemBoxPortion from './ItemBoxPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemBoxPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});