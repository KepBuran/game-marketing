import usersApi from "../api/UserAPI";
import { SearchParameters, defaultSearchParameters } from "../models/SearchParameters";
import { SortBy } from "../models/SortBy";
import userStore from "../stores/UsersStore";
import {runInAction} from "mobx";

export class UsersService {
  private static instance: UsersService;
  
  private constructor() {}

  public static getInstance(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService();
    }
    return UsersService.instance;
  }

  getUsers() {
    userStore.users = usersApi.getUsers();
  }

  login(username: string, password: string): {success: boolean, error?: string} {
    const {user, error} = usersApi.login(username, password);
    if (error) {
      return {success: false, error}
    }
    userStore.currentUser = user;
    return {success: true}
  }


  signIn(username: string, password: string): {success: boolean, error?: string} {
    const {user, error} = usersApi.signIn(username, password);
    if (error) {
      return {success: false, error}
    }
    userStore.currentUser = user;
    return {success: true}
  }


  logout() {
    userStore.currentUser = null;
  }
}