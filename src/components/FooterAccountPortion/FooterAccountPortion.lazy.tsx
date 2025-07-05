import React, { lazy, Suspense } from 'react';

const LazyFooterAccountPortion = lazy(() => import('./FooterAccountPortion'));

const FooterAccountPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterAccountPortion {...props} />
  </Suspense>
);

export default FooterAccountPortion;
