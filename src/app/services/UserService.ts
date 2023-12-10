import { getUsers, loadUsers } from "../api/UserAPI";
import { SearchParameters, defaultSearchParameters } from "../models/SearchParameters";
import { SortBy } from "../models/SortBy";
import userStore from "../stores/UserStore";
import {runInAction} from "mobx";

export class UserService {
  constructor(private readonly loadUsers) {}

  getUsers() {
    userStore.users = getUsers();
  }


  saveData(response:any) {
    runInAction(() => {
        if ('message' in response) {
            userStore.error = response.message;
            userStore.loading = false;
            return;
        }
        userStore.error = "";
        userStore.usersAmount = response.totalResults;
        userStore.users = response.users;
        userStore.loading = false;
    });
}

  async updateUsers(parameters: SearchParameters = defaultSearchParameters) {
    userStore.loading = true;
    userStore.prevParameters = parameters

    await loadUsers(this.buildParametersRequest(parameters))
        .then(response => {
            this.saveData(response);
        }).catch(err => {
            runInAction(() => {
                userStore.error = "Unknown error. Check your internet connection and try again";
            });
        });

}


buildParametersRequest(parameters: SearchParameters): string {
    let parametersReq: string = "?";
    parametersReq += "apiKey="+parameters.apiKey;
    parametersReq += parameters.sortBy ? "&sortBy="+parameters.sortBy : "";
    parametersReq += parameters.keyWords ? "&q="+parameters.keyWords : "";
    parametersReq += parameters.fromDate ? "&from="+parameters.fromDate.toJSON().slice(0, 10) : "";
    parametersReq += parameters.toDate ? "&to="+parameters.toDate.toJSON().slice(0, 10) : "";
    parametersReq += parameters.pageSize ? "&pageSize="+parameters.pageSize : "";
    return parametersReq;
}

async searchUsersByGame(parameters: SearchParameters = defaultSearchParameters){

    await this.updateUsers(parameters);
  }

}