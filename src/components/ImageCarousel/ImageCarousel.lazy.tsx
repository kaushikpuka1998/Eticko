import React, { lazy, Suspense } from 'react';

const LazyImageCarousel = lazy(() => import('./ImageCarousel'));

const ImageCarousel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyImageCarousel {...props} />
  </Suspense>
);

export default ImageCarousel;
