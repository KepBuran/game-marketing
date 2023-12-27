import users from "./users";
import games from "./games";
import { Game } from "../models/Game";
import { User } from "../models/User";

interface UserGame {
  id: string;
  gameId: string;
  userId: string;
  boughtDate: Date;
}

const usersGames: UserGame[] = [];

function getRandomDate(startDate: Date): Date {
  const startTimestamp = startDate.getTime();
  const twoDaysAgoTimestamp = Date.now() - (2 * 24 * 60 * 60 * 1000);
  const randomTimestamp = Math.floor(Math.random() * (twoDaysAgoTimestamp - startTimestamp + 1)) + startTimestamp;
  return new Date(randomTimestamp);
}

function getMaxDate(dates: Date[]): Date {
  return new Date(Math.max(...dates.map(date => date.getTime())));
}


for (let i = 0; i < 2000; i++) {
  const randomGame: Game = games[Math.floor(Math.random() * games.length)];
  const randomUser: User = users[Math.floor(Math.random() * users.length)];
  
  const userGame: UserGame = {
    id: `userGame${i}`,
    gameId: randomGame.id,
    userId: randomUser.id,
    boughtDate: getRandomDate(getMaxDate([randomGame.release, randomUser.registration_date]))
  };

  if (usersGames.find(userGame => userGame.gameId === randomGame.id && userGame.userId === randomUser.id)) {
    continue;
  }

  usersGames.push(userGame);
}


export default usersGames;