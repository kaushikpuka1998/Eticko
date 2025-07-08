import React, { lazy, Suspense } from 'react';

const LazyNewArrivalPortion = lazy(() => import('./NewArrivalPortion'));

const NewArrivalPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNewArrivalPortion {...props} />
  </Suspense>
);

export default NewArrivalPortion;
