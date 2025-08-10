import React, { lazy, Suspense } from 'react';

const LazyContactCard = lazy(() => import('./ContactCard'));

const ContactCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContactCard {...props} />
  </Suspense>
);

export default ContactCard;
