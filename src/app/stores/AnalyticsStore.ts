import {makeAutoObservable} from "mobx";
import { Game } from "../models/Game";
import UserByGame from "../models/UserByGame";
import { AnalyticsOption } from "../services/AnalyticsService";


class AnalyticsStore {
    private _data: PlotData | null = null
    private _users: UserByGame[] = []
    private _currentOption: AnalyticsOption

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

    get currentOption(): AnalyticsOption {
        return this._currentOption;
    }

    set currentOption(value: AnalyticsOption) {
        this._currentOption = value;
    }
}

export default new AnalyticsStore();