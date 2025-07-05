import React, { lazy, Suspense } from 'react';

const LazyCategoryortion = lazy(() => import('./Categoryortion'));

const Categoryortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCategoryortion {...props} />
  </Suspense>
);

export default Categoryortion;
