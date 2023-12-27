import gamesApi from "../api/GamesAPI";
import usersApi from "../api/UserAPI";
import gamesStore from "../stores/GamesStore";
import analyticsStore from "../stores/AnalyticsStore";


export class AnalyticsService {
  private static _instance: AnalyticsService;

  private constructor() {
  }

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService._instance) {
      AnalyticsService._instance = new AnalyticsService();
    }
    return AnalyticsService._instance;
  }

  public async setUsersByGameId(userId: string) {
    const users = await usersApi.getUsersByGameId(userId);
    analyticsStore.users = users;
  }

  public async setOption(option: string) {
    
  }

}