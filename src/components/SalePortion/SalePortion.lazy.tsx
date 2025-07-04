import React, { lazy, Suspense } from 'react';

const LazySalePortion = lazy(() => import('./SalePortion'));

const SalePortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySalePortion {...props} />
  </Suspense>
);

export default SalePortion;
