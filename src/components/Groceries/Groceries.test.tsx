import React from 'react';
import ReactDOM from 'react-dom';
import Groceries from './Groceries';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Groceries />, div);
  ReactDOM.unmountComponentAtNode(div);
});