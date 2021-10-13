import axios, { AxiosInstance } from "axios";
import { GoogleApi } from "./constants/googleAPi";

export const sheetsAxios: AxiosInstance = axios.create({
  baseURL: GoogleApi.SHEETS,
});