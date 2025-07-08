import React, { lazy, Suspense } from 'react';

const LazyHealthBeauty = lazy(() => import('./HealthBeauty'));

const HealthBeauty = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHealthBeauty {...props} />
  </Suspense>
);

export default HealthBeauty;
