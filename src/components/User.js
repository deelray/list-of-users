import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ login, avatar_url, html_url }) => {
  return (
    <Link to={`/${login}`} className="btn btn-light row">
      <img src={avatar_url} className="card-img-top" alt={avatar_url} />
      <div className="about">
        <h4>Login: {login}</h4>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}>
          Link on GitHub Profile
        </a>
      </div>
    </Link>
  );
};

export default User;

User.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};
