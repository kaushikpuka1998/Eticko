import React, { lazy, Suspense } from 'react';

const LazyHeadNavBar = lazy(() => import('./HeadNavBar'));

const HeadNavBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeadNavBar {...props} />
  </Suspense>
);

export default HeadNavBar;
