import {makeAutoObservable} from "mobx";
import { Game } from "../models/Game";


class ArticlesStore {
    private _games: Game[] = [];

    constructor() {
        this._games = [];
        makeAutoObservable(this);
    }

    get games(): Game[] {
        return this._games;
    }

    set games(value: Game[]) {
        this._games = value;
    }
}

export default new ArticlesStore();