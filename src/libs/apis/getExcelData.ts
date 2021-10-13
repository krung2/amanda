import config from '../../config/config.json';
import { sheetsAxios } from '../customAxios';
import { IResProfileData } from '../interfaces/IExcelData';

export const getAllExcelData = async () => {
  const select: string = encodeURI('ranges=대구!A2:H16&ranges=대덕!A2:H16&ranges=광주!A2:H16');
  const url: string = `/${config.sheet_id}/values:batchGet?${select}&key=${config.private_key}`;
  const { data } = await sheetsAxios.get<IResProfileData>(url);
  return data;
}