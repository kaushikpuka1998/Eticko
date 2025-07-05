import React from 'react';
import ReactDOM from 'react-dom';
import FooterAccountPortion from './FooterAccountPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterAccountPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});