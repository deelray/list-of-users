import { flow, types } from 'mobx-state-tree';
import { SingleUserModel, UserModel } from './UserModel';
import axios from 'axios';
import { BASE_URL, PER_PAGE, TOTAL_USERS } from '../constants';

const UsersModel = types
  .model('UsersModel', {
    isLoading: types.optional(types.boolean, false),
    userNumber: types.optional(types.number, 0),
    users: types.array(UserModel),
    user: types.optional(SingleUserModel, {})
  })
  .actions((usersModel) => ({
    setIsLoading(loading) {
      usersModel.isLoading = loading;
    },
    setUserNumber(number) {
      usersModel.userNumber = number;
    },
    setUsers(users) {
      usersModel.users = users;
    },
    setUser(user) {
      usersModel.user = user;
    },
    getUsers: flow(function* getUsers() {
      const { setIsLoading, setUsers } = usersModel;
      setIsLoading(true);
      try {
        const { data } = yield axios.get(`${BASE_URL}?since=0&per_page=${TOTAL_USERS}`);
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
        const { data } = yield axios.get(`${BASE_URL}/${username}`);
        setUser(data);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setIsLoading(false);
      }
    })
  }))
  .views((usersModel) => ({
    get paginatedUsersList() {
      const { users, userNumber } = usersModel;
      const userStartNumber = userNumber * PER_PAGE;
      return users.slice(userStartNumber, userStartNumber + PER_PAGE);
    }
  }));

export default UsersModel;
