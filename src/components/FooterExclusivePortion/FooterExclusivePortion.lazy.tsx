import React, { lazy, Suspense } from 'react';

const LazyFooterExclusivePortion = lazy(() => import('./FooterExclusivePortion'));

const FooterExclusivePortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterExclusivePortion {...props} />
  </Suspense>
);

export default FooterExclusivePortion;
