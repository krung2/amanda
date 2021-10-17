import axios, { AxiosInstance } from "axios";
import config from '../config/config.json';

export const sheetsAxios: AxiosInstance = axios.create({
  baseURL: config.server,
});