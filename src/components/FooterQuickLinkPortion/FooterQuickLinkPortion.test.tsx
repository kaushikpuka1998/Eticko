import React from 'react';
import ReactDOM from 'react-dom';
import FooterQuickLinkPortion from './FooterQuickLinkPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterQuickLinkPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});