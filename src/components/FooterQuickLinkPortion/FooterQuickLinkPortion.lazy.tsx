import React, { lazy, Suspense } from 'react';

const LazyFooterQuickLinkPortion = lazy(() => import('./FooterQuickLinkPortion'));

const FooterQuickLinkPortion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterQuickLinkPortion {...props} />
  </Suspense>
);

export default FooterQuickLinkPortion;
