import React, { lazy, Suspense } from 'react';

const LazyLeftColumnBar = lazy(() => import('./LeftColumnBar'));

const LeftColumnBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLeftColumnBar {...props} />
  </Suspense>
);

export default LeftColumnBar;
