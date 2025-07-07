import React, { lazy, Suspense } from 'react';

const LazyItemBoxPortion = lazy(() => import('./ItemBoxPortion'));

const ItemBoxPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyItemBoxPortion {...props} />
  </Suspense>
);

export default ItemBoxPortion;
