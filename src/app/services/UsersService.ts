import gamesApi from "../api/GamesAPI";
import usersApi from "../api/UserAPI";
import { Game } from "../models/Game";
import { SearchParameters, defaultSearchParameters } from "../models/SearchParameters";
import { SortBy } from "../models/SortBy";
import userStore from "../stores/UsersStore";
import {runInAction} from "mobx";

export class UsersService {
  private static instance: UsersService;
  
  private constructor() {
    this.getCurrentUserGames();
  }

  public static getInstance(): UsersService {
    if (!UsersService.instance) {
      UsersService.instance = new UsersService();
    }
    return UsersService.instance;
  }

  getUsers() {
    userStore.users = usersApi.getUsers();
  }

  async getCurrentUserGames() {
    if (!userStore.currentUser) {
      userStore.currentUserGames = [];
      return;
    }

    const games: Game[] | null = await gamesApi.getUserGames(userStore.currentUser.id);
    if (!games) {
      userStore.currentUserGames = [];
      return;
    }
    userStore.currentUserGames = games
  }

  async login(username: string, password: string): Promise<{success: boolean, error?: string}> {
    const {user, error} = await usersApi.login(username, password);
    if (error) {
      return {success: false, error}
    }
    userStore.currentUser = user;
    this.getCurrentUserGames();
    return {success: true}
  }


  async signIn(username: string, password: string): Promise<{success: boolean, error?: string}> {
    const {user, error} = await usersApi.signIn(username, password);
    if (error) {
      return {success: false, error}
    }
    userStore.currentUser = user;
    this.getCurrentUserGames();
    return {success: true}
  }


  logout() {
    userStore.currentUser = null;
    this.getCurrentUserGames();
  }
}