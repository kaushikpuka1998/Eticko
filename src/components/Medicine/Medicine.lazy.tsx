import React, { lazy, Suspense } from 'react';

const LazyMedicine = lazy(() => import('./Medicine'));

const Medicine = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMedicine {...props} />
  </Suspense>
);

export default Medicine;
