import { Wines } from "../api-interfaces/wine";
import { fetchHttp } from "../httpApiCalls";

export const getAllWines = async (token: string): Promise<Wines> => {
  return await fetchHttp("Wines", "GET", token);
};
