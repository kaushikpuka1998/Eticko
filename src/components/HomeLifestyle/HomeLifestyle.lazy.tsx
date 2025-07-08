import React, { lazy, Suspense } from 'react';

const LazyHomeLifestyle = lazy(() => import('./HomeLifestyle'));

const HomeLifestyle = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHomeLifestyle {...props} />
  </Suspense>
);

export default HomeLifestyle;
