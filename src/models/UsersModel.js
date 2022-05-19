import { flow, types } from 'mobx-state-tree';
import { SingleUserModel, UserModel } from './UserModel';
import axios from 'axios';
import { PER_PAGE } from '../constants';

const UsersModel = types
  .model('UsersModel', {
    isLoading: types.optional(types.boolean, false),
    pageNumber: types.optional(types.number, 0),
    users: types.array(UserModel),
    user: types.optional(SingleUserModel, {})
  })
  .actions((usersModel) => ({
    setIsLoading(loading) {
      usersModel.isLoading = loading;
    },
    setPageNumber(number) {
      usersModel.pageNumber = number;
    },
    setUsers(users) {
      usersModel.users = users;
    },
    setUser(user) {
      usersModel.user = user;
    },
    getUsers: flow(function* getUsers() {
      const { setUsers, setIsLoading, pageNumber } = usersModel;
      setIsLoading(true);
      try {
        const { data } = yield axios.get(
          `https://api.github.com/users?since=${pageNumber}&per_page=${PER_PAGE}`
        );
        setUsers(data);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setIsLoading(false);
      }
    }),
    getUser: flow(function* getUser(username) {
      const { setUser, setIsLoading } = usersModel;
      setIsLoading(true);
      try {
        const { data } = yield axios.get(`https://api.github.com/users/${username}`);
        setUser(data);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setIsLoading(false);
      }
    })
  }));

export default UsersModel;
