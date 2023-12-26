import { getUsers, loadUsers, login, signIn } from "../api/UserAPI";
import { SearchParameters, defaultSearchParameters } from "../models/SearchParameters";
import { SortBy } from "../models/SortBy";
import userStore from "../stores/UserStore";
import {runInAction} from "mobx";

export class UserService {
  private static instance: UserService;
  
  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  getUsers() {
    userStore.users = getUsers();
  }

  login(username: string, password: string): {success: boolean, error?: string} {
    const {user, error} = login(username, password);
    if (error) {
      return {success: false, error}
    }
    userStore.currentUser = user;
    return {success: true}
  }


  signIn(username: string, password: string): {success: boolean, error?: string} {
    const {user, error} = login(username, password);
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