import {makeAutoObservable} from "mobx";
import { User } from "../models/User";
import { SearchParameters, defaultSearchParameters } from "../models/SearchParameters";


class UserStore {
    private _users: User[] = [];
    private _usersAmount = 0;
    private _prevParameters: SearchParameters;
    private _page: number;
    private _error: String;
    private _loading: boolean;

    constructor() {
        this._users = [];
        this._error = "";
        this._page = 1;
        this._prevParameters = defaultSearchParameters;
        this._usersAmount = this.users.length;
        this._loading = false;
        makeAutoObservable(this);
    }

    get users(): User[] {
        return this._users;
    }

    set users(value: User[]) {
        this._users = value;
    }

    get usersAmount(): number {
        return this._usersAmount;
    }

    set usersAmount(value: number) {
        this._usersAmount = value;
    }


    get error(): String {
        return this._error;
    }

    set error(value: String) {
        this._error = value;
    }


    get loading(): boolean {
        return this._loading;
    }

    set loading(value: boolean) {
        this._loading = value;
    }

    get page(): number {
        return this._page;
    }

    set page(value: number) {
        this._page = value;
    }


    get prevParameters(): SearchParameters {
        return this._prevParameters;
    }

    set prevParameters(value: SearchParameters) {
        this._prevParameters = value;
    }
}

export default new UserStore()