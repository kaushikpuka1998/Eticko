import React, { lazy, Suspense } from 'react';

const LazyWomenFashion = lazy(() => import('./WomenFashion'));

const WomenFashion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWomenFashion {...props} />
  </Suspense>
);

export default WomenFashion;
