import { Wines } from "../api-models/wine";
import { fetchHttp } from "../httpApiCalls";

export const getAllWines = async (): Promise<Wines> => {
    return await fetchHttp("Wines", "GET");
  };