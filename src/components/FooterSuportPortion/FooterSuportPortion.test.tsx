import React from 'react';
import ReactDOM from 'react-dom';
import FooterSuportPortion from './FooterSuportPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterSuportPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});