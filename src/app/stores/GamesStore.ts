import {makeAutoObservable} from "mobx";
import { Game } from "../models/Game";


class GamesStore {
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

    get gameById(): (id: string) => Game | undefined {
        return (id: string) => this._games.find(game => game.id === id);
    }

    get navBarGames(): {text: string, href: string}[] {
        return this._games.map(game => ({text: game.name, href: `/games/${game.id}`}));
    }
}

export default new GamesStore();