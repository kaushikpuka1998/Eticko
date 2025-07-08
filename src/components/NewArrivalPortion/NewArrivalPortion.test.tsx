import React from 'react';
import ReactDOM from 'react-dom';
import NewArrivalPortion from './NewArrivalPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewArrivalPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});