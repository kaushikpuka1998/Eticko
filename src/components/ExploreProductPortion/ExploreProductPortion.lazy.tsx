import React, { lazy, Suspense } from 'react';

const LazyExploreProductPortion = lazy(() => import('./ExploreProductPortion'));

const ExploreProductPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExploreProductPortion {...props} />
  </Suspense>
);

export default ExploreProductPortion;
