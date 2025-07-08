import React, { lazy, Suspense } from 'react';

const LazyWishlist = lazy(() => import('./Wishlist'));

const Wishlist = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWishlist {...props} />
  </Suspense>
);

export default Wishlist;
