import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_MAIN } from '../constants';

const BackHomeButton = () => {
  return (
    <p className="back">
      <Link to={ROUTE_MAIN} className="link">
        Back Home
      </Link>
    </p>
  );
};

export default BackHomeButton;
