import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useStore } from '../models/RootContext';
import Loader from '../components/Loader';
import { linkFormatter } from '../utils';
import BackHomeButton from '../components/BackHomeButton';

const UserDetails = () => {
  const { username } = useParams();
  const {
    usersData: { getUser, user, isLoading }
  } = useStore();
  const {
    avatar_url,
    name,
    followers,
    following,
    created_at,
    company,
    email,
    location,
    blog,
    bio
  } = user;

  useEffect(() => {
    getUser(username);
  }, [username]);

  if (isLoading) {
    return <Loader />;
  }

  const date = new Date(created_at);

  return (
    <>
      <BackHomeButton />
      <div className="userCard">
        <img src={avatar_url} className="card-img-top" alt="avatar" />
        <div>
          <h2>Name: {name || `-`}</h2>
          <p className="bio">Bio: {bio || `-`}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Crated: {date.toLocaleDateString()}</p>
          <p>Company: {company || `-`}</p>
          <p>Email: {email || `-`}</p>
          <p>Location: {location || `-`}</p>
          <p>
            User blog:{' '}
            {blog ? (
              <a href={linkFormatter(blog)} target="_blank" rel="noreferrer">
                Link
              </a>
            ) : (
              `-`
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default observer(UserDetails);
