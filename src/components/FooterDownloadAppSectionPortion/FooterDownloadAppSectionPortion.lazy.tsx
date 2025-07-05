import React, { lazy, Suspense } from 'react';

const LazyFooterDownloadAppSectionPortion = lazy(() => import('./FooterDownloadAppSectionPortion'));

const FooterDownloadAppSectionPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterDownloadAppSectionPortion {...props} />
  </Suspense>
);

export default FooterDownloadAppSectionPortion;
