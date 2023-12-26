import {makeAutoObservable} from "mobx";
import { User } from "../models/User";


class UsersStore {
    private _users: User[] = [];
    private _currentUser: User | null = null;

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
}

export default new UsersStore()