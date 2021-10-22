import axios, { AxiosInstance } from "axios";
import config from '../config/config.json';

export const customAxios: AxiosInstance = axios.create({
  baseURL: config.server,
});
