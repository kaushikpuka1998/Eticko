import React from 'react';
import ReactDOM from 'react-dom';
import BabyToys from './BabyToys';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BabyToys />, div);
  ReactDOM.unmountComponentAtNode(div);
});