import React from 'react';
import ReactDOM from 'react-dom';
import FooterDownloadAppSectionPortion from './FooterDownloadAppSectionPortion';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterDownloadAppSectionPortion />, div);
  ReactDOM.unmountComponentAtNode(div);
});