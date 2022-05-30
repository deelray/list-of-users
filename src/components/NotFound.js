import React from 'react';
import BackHomeButton from './BackHomeButton';

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-1 fw-bold text-info">404</h1>
      <BackHomeButton />
    </div>
  );
};

export default NotFound;
