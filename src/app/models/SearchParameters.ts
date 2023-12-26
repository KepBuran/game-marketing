import {SortBy} from "./SortBy";

export interface SearchParameters {
    apiKey: string,
    keyWords: string,
    fromDate: Date,
    toDate: Date,
    sortBy: SortBy,
    pageSize: number,
    game:string

}

const getMonthAgoDate = (date: Date): Date => new Date(date.setMonth(date.getMonth()-1));

export const defaultSearchParameters: SearchParameters = {
    apiKey: "",
    keyWords: "Ukraine",
    fromDate: getMonthAgoDate(new Date()),
    toDate: new Date(),
    sortBy: SortBy.game,
    game:"Deputinization",
    pageSize: 20
}