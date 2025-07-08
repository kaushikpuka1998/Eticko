import React, { lazy, Suspense } from 'react';

const LazySports = lazy(() => import('./Sports'));

const Sports = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySports {...props} />
  </Suspense>
);

export default Sports;
