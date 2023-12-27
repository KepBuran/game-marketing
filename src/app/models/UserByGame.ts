import { User } from "./User";


type UserByGame = User & { boughtDate: Date };

export default UserByGame;
