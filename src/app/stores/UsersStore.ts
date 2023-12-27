import {makeAutoObservable} from "mobx";
import { User } from "../models/User";
import { Game } from "../models/Game";

class UsersStore {
    private _users: User[] = [];
    private _currentUser: User | null = null;
    private _currentUserGames: Game[] = [];

    constructor() {
        this._users = [];
        makeAutoObservable(this);
    }

    get users(): User[] {
        return this._users;
    }

    set users(value: User[]) {
        this._users = value;
    }

    get currentUser(): User | null {
        return this._currentUser;
    }

    set currentUser(value: User | null) {
        this._currentUser = value;
    }

    get currentUserGames(): Game[] {
        return this._currentUserGames;
    }

    set currentUserGames(value: Game[]) {
        this._currentUserGames = value;
    }

    userHasGame(gameId: string): boolean {
        return this._currentUserGames.some(game => game.id === gameId);
    }
}

export default new UsersStore()