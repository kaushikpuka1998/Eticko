import React, { lazy, Suspense } from 'react';

const LazyStatsSection = lazy(() => import('./StatsSection'));

const StatsSection = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStatsSection {...props} />
  </Suspense>
);

export default StatsSection;
