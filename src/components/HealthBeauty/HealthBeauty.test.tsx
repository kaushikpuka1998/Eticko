import React from 'react';
import ReactDOM from 'react-dom';
import HealthBeauty from './HealthBeauty';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HealthBeauty />, div);
  ReactDOM.unmountComponentAtNode(div);
});