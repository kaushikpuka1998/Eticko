import React, { lazy, Suspense } from 'react';

const LazyPromisePortion = lazy(() => import('./PromisePortion'));

const PromisePortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPromisePortion {...props} />
  </Suspense>
);

export default PromisePortion;
