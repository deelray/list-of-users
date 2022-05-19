import { types } from 'mobx-state-tree';
import UsersModel from './UsersModel';

const RootStore = types.model('RootStore', {
  usersData: types.optional(UsersModel, {})
});

const initialState = RootStore.create({});

export const rootStore = initialState;
