import React, { lazy, Suspense } from 'react';

const LazyFooterSuportPortion = lazy(() => import('./FooterSuportPortion'));

const FooterSuportPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterSuportPortion {...props} />
  </Suspense>
);

export default FooterSuportPortion;
