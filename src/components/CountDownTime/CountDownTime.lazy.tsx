import React, { lazy, Suspense } from 'react';

const LazyCountDownTime = lazy(() => import('./CountDownTime'));

const CountDownTime = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCountDownTime {...props} />
  </Suspense>
);

export default CountDownTime;
