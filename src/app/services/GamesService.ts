import { getGames } from "../api/GamesAPI";
import gamesStore from "../stores/GamesStore";


export class GamesService {
  private static _instance: GamesService;

  private constructor() {
    this.setGames();
  }

  public static getInstance(): GamesService {
    if (!GamesService._instance) {
      GamesService._instance = new GamesService();
    }
    return GamesService._instance;
  }

  setGames() {
    gamesStore.games = getGames();
  }

}