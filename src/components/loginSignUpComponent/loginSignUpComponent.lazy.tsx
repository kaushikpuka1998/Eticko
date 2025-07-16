import React, { lazy, Suspense } from 'react';

const LazyloginSignUpComponent = lazy(() => import('./loginSignUpComponent'));

const loginSignUpComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyloginSignUpComponent {...props} />
  </Suspense>
);

export default loginSignUpComponent;
