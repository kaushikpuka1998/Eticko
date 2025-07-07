import React from 'react';
import ReactDOM from 'react-dom';
import FlashSalesPortion from './FlashSalesPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FlashSalesPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});