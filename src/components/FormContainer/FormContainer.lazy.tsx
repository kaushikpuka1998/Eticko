import React, { lazy, Suspense } from 'react';

const LazyFormContainer = lazy(() => import('./FormContainer'));

const FormContainer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFormContainer {...props} />
  </Suspense>
);

export default FormContainer;
