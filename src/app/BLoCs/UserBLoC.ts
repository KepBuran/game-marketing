import {UserService} from "../services/UserService";
import userStore from "../stores/UserStore";

export class UserBLoC {

    constructor(private readonly userService: UserService) {
    }
}