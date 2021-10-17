import { sheetsAxios } from '../customAxios';
import { ISchoolData } from '../interfaces/IUserData';

export const getDaeguData = async () => {
  const url: string = `/daegu`;
  const { data } = await sheetsAxios.get<ISchoolData[]>(url);
  return data;
}

export const getDaedeokData = async () => {
  const url: string = `/daedeok`;
  const { data } = await sheetsAxios.get<ISchoolData[]>(url);
  return data;
}

export const getGwangjuData = async () => {
  const url: string = `/gwangju`;
  const { data } = await sheetsAxios.get<ISchoolData[]>(url);
  return data;
}
