import { customAxios } from "../customAxios";
import { IConnect } from "../interfaces/IConnect";

export const getConnectData = async () => {
  const url: string = `/connect`;
  const { data } = await customAxios.get<IConnect[]>(url);
  return data;
}