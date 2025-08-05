import React from 'react';
import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});