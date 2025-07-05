import React from 'react';
import ReactDOM from 'react-dom';
import FooterExclusivePortion from './FooterExclusivePortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterExclusivePortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});