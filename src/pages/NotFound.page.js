import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const NotFound = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Page Not Found - BroadCaster');
  }, [setPageTitle]);
  return (
    <div className="not-found">
      <div>
        <h1>
          404
          <span role="img" aria-label="emoji">
            😬
          </span>
        </h1>
        <h2>The page you requested for doesn&apos;t appear to be here</h2>
      </div>
    </div>
  );
};