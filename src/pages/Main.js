import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../models/RootContext';
import UsersList from '../components/UsersList';
import Pagination from '../components/Pagination';

const Main = () => {
  const {
    usersData: { getUsers, users }
  } = useStore();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className="main">
      <h1>List of GitHub users</h1>
      <UsersList />
      {users.length > 0 && <Pagination />}
    </main>
  );
};

export default observer(Main);
