import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../models/RootContext';
import User from './User';

const UsersList = () => {
  const {
    usersData: { paginatedUsersList }
  } = useStore();

  window.scrollTo(0, 0);

  return (
    <section>
      {paginatedUsersList?.map(({ id, login, avatar_url, html_url }) => (
        <User key={id} login={login} avatar_url={avatar_url} html_url={html_url} />
      ))}
    </section>
  );
};

export default observer(UsersList);
