import { ISchoolData } from "../libs/interfaces/IUserData";

export const checkNullOrUndefindArray = <T>(data: T) => {

  if (data === undefined || data === null) return [];
  return data;
}

export const checkNullOrUndefind = (data: string): boolean => {

  if (data === undefined || data === null || data === '') return true;
  return false;
}

export const checkNullCard = (cardData: ISchoolData) => {
  if (checkNullOrUndefind(cardData.name1)) return false;
  if (checkNullOrUndefind(cardData.name2)) return false;
  if (checkNullOrUndefind(cardData.github1)) return false;
  if (checkNullOrUndefind(cardData.github2)) return false;
  if (checkNullOrUndefind(cardData.position1)) return false;
  if (checkNullOrUndefind(cardData.position2)) return false;
  if (checkNullOrUndefind(cardData.intro)) return false;
  if (checkNullOrUndefind(cardData.contact)) return false;
  return true;
}