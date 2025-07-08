import React, { lazy, Suspense } from 'react';

const LazyBabyToys = lazy(() => import('./BabyToys'));

const BabyToys = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBabyToys {...props} />
  </Suspense>
);

export default BabyToys;
