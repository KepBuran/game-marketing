import gamesApi from "../api/GamesAPI";
import gamesStore from "../stores/GamesStore";
import usersStore from "../stores/UsersStore";


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

  async setGames() {
    const games = await gamesApi.getAllGames();
    if (!games) {
      return
    }
    gamesStore.games = await gamesApi.getAllGames() ?? [];
  }

  async buyGame(gameId: string, userId: string): Promise<{success: boolean, error?: string}> {
    const result = await gamesApi.buyGame(gameId, userId);

    const {game, error} = result;
    
    if (error) {
      return {success: false, error}
    }
    if (game) {
      usersStore.currentUserGames.push(game);
    }
    return {success: true}
  }

}