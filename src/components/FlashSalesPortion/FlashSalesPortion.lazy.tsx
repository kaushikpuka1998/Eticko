import React, { lazy, Suspense } from 'react';

const LazyFlashSalesPortion = lazy(() => import('./FlashSalesPortion'));

const FlashSalesPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlashSalesPortion {...props} />
  </Suspense>
);

export default FlashSalesPortion;
