import React, { lazy, Suspense } from 'react';

const LazyLeftColumnButton = lazy(() => import('./LeftColumnButton'));

const LeftColumnButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLeftColumnButton {...props} />
  </Suspense>
);

export default LeftColumnButton;
