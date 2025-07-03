import React, { lazy, Suspense } from 'react';

const LazyInputBox = lazy(() => import('./InputBox'));

const InputBox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInputBox {...props} />
  </Suspense>
);

export default InputBox;
