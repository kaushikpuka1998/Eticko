import React, { lazy, Suspense } from 'react';

const LazyBestSellingProductsPortion = lazy(() => import('./BestSellingProductsPortion'));

const BestSellingProductsPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBestSellingProductsPortion {...props} />
  </Suspense>
);

export default BestSellingProductsPortion;
