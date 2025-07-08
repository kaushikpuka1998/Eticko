import React, { lazy, Suspense } from 'react';

const LazyElectronics = lazy(() => import('./Electronics'));

const Electronics = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyElectronics {...props} />
  </Suspense>
);

export default Electronics;
