import { getGames } from "../api/GamesAPI";
import gamesStore from "../stores/GamesStore";


export class GamesService {
  constructor() {

  }

  getGames() {
    gamesStore.games = getGames();
  }

}