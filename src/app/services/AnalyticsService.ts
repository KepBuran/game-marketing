import gamesApi from "../api/GamesAPI";
import usersApi from "../api/UserAPI";
import gamesStore from "../stores/GamesStore";
import analyticsStore from "../stores/AnalyticsStore";
import { User } from "../models/User";
import { PlotData } from "../models/PlotData";
import { groupBy } from "lodash";

export type AnalyticsOption = 'age' | 'registrationDate' | 'sex' | 'boughtDate';

const getAnalyticsDateData = (datesArray: Date[]): PlotData => {
  const groupedDates: {[key: string]: Date[]} = groupBy(datesArray, date => {
    const dateObj = new Date(date);
    return `${dateObj.getMonth()}-${dateObj.getFullYear()}`;
  });
  const groupedDatesArray = Object.entries(groupedDates).map(([key, value]) => [value[0], value.length]);
  groupedDatesArray.sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
  return {
    x: groupedDatesArray.map(value => new Date(value[0]).toLocaleString('default', { month: 'long', year: 'numeric' })),
    y:  groupedDatesArray.map(value => value[1]),
    type: 'bar',
    mode: 'markers',
    marker: {color: 'blue'},
    name: 'Registration date',
    title: 'Registration date'
  }
}

const getAnalyticsData = (users: User[], option: AnalyticsOption): PlotData => {
  switch (option) {
    case('age'):
      const ageDict: {[key: string]: number} = {};
      users.forEach(user => {
        if (ageDict[user.age]) {
          ageDict[user.age] += 1;
        } else {
          ageDict[user.age] = 1;
        }
      });
      return {
        x:  Object.keys(ageDict).map(key => parseInt(key)),
        y: Object.values(ageDict),
        type: 'scatter',
        mode: 'markers',
        marker: {color: 'blue'},
        name: 'Age',
        title: 'Age'
      }
    case('registrationDate'):
      return getAnalyticsDateData(users.map(user => user.registration_date));
    
    case('boughtDate'):
      return getAnalyticsDateData(users.map(user => user.boughtDate));
      
    case('sex'): 
      const sexDict: {[key: string]: number} = {};
      users.forEach(user => {
        if (sexDict[user.sex]) {
          sexDict[user.sex] += 1;
        } else {
          sexDict[user.sex] = 1;
        }
      });
      return {
        x:  Object.keys(sexDict),
        y: Object.values(sexDict),
        type: 'bar',
        mode: 'markers',
        marker: {color: 'blue'},
        name: 'Sex',
        title: 'Sex'
      }
  }
}

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

  public async setUsersByGameId(gameId: string) {
    const users = await usersApi.getUsersByGameId(gameId);
    
    analyticsStore.users = users;
    this.setDataByOption(analyticsStore.currentOption);
  }

  public async setDataByOption(option: AnalyticsOption) {
    analyticsStore.currentOption = option;
    const users = analyticsStore.users;   
    analyticsStore.data = getAnalyticsData(users, option);
  }


}