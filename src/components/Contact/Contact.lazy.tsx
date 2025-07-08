import React, { lazy, Suspense } from 'react';

const LazyContact = lazy(() => import('./Contact'));

const Contact = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContact {...props} />
  </Suspense>
);

export default Contact;
