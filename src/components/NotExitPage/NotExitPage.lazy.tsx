import React, { lazy, Suspense } from 'react';

const LazyNotExitPage = lazy(() => import('./NotExitPage'));

const NotExitPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNotExitPage {...props} />
  </Suspense>
);

export default NotExitPage;
