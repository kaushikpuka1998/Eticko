import React from 'react';
import ReactDOM from 'react-dom';
import ImageCarousel from './ImageCarousel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageCarousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});