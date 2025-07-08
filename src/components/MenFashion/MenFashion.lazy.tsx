import React, { lazy, Suspense } from 'react';

const LazyMenFashion = lazy(() => import('./MenFashion'));

const MenFashion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMenFashion {...props} />
  </Suspense>
);

export default MenFashion;
