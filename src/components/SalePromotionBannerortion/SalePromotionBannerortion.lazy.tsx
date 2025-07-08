import React, { lazy, Suspense } from 'react';

const LazySalePromotionBannerortion = lazy(() => import('./SalePromotionBannerortion'));

const SalePromotionBannerortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySalePromotionBannerortion {...props} />
  </Suspense>
);

export default SalePromotionBannerortion;
