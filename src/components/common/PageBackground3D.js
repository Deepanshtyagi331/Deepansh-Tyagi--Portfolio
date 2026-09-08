import React, { Suspense, lazy } from 'react';

const Hero3DCanvas = lazy(() => import('../hero/Hero3DCanvas'));

const PageBackground3D = ({ variant = 'hero' }) => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-25 dark:opacity-30 select-none transition-opacity duration-700"
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <Hero3DCanvas variant={variant} />
      </Suspense>
    </div>
  );
};

export default PageBackground3D;
