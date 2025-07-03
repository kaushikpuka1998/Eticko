import React, { lazy, Suspense } from 'react';

const LazyTopBarButton = lazy(() => import('./TopBarButton'));

const TopBarButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTopBarButton {...props} />
  </Suspense>
);

export default TopBarButton;
