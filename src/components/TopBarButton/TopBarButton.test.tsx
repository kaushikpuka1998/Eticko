import React from 'react';
import ReactDOM from 'react-dom';
import TopBarButton from './TopBarButton';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopBarButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});