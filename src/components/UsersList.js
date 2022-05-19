import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../models/RootContext';
import User from './User';
import Loader from './Loader';

const UsersList = () => {
  const {
    usersData: { users, isLoading }
  } = useStore();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      {users?.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </section>
  );
};

export default observer(UsersList);
