import React, { lazy, Suspense } from 'react';

const LazyGroceries = lazy(() => import('./Groceries'));

const Groceries = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGroceries {...props} />
  </Suspense>
);

export default Groceries;
