import {makeAutoObservable} from "mobx";
import { Game } from "../models/Game";
import UserByGame from "../models/UserByGame";


class AnalyticsStore {
    private _data: PlotData | null = null
    private _users: UserByGame[] = []

    constructor() {
        makeAutoObservable(this);
    }   

    get data(): PlotData | null {
        return this._data;
    }

    set data(value: PlotData | null) {
        this._data = value;
    }

    get users(): UserByGame[] {
        return this._users;
    }

    set users(value: UserByGame[]) {
        this._users = value;
    }
}

export default new AnalyticsStore();