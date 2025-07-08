import React from 'react';
import ReactDOM from 'react-dom';
import SalePromotionBannerortion from './SalePromotionBannerortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SalePromotionBannerortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});