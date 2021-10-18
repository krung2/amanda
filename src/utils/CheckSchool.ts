import { SchoolColor } from "../libs/constants/schoolColor";
import { SchoolConstant } from "../libs/constants/schoolConstant";

export const checkSchoolFont = (school: SchoolConstant): SchoolColor => {
  if (school === SchoolConstant.DAEGU) return SchoolColor.DAEGU_FONT;
  if (school === SchoolConstant.GWANGJU) return SchoolColor.GWANGJU_FONT;
  return SchoolColor.DAEDEOK_FONT;
}

export const checkSchoolBack = (school: SchoolConstant): SchoolColor => {
  if (school === SchoolConstant.DAEGU) return SchoolColor.DAEGU_BACK;
  if (school === SchoolConstant.GWANGJU) return SchoolColor.GWANGJU_BACK;
  return SchoolColor.DAEDEOK_BACK;
}

export const checkSchoolHeader = (school: SchoolConstant): SchoolColor => {
  if (school === SchoolConstant.DAEGU) return SchoolColor.DAEGU_HEADER;
  if (school === SchoolConstant.GWANGJU) return SchoolColor.GWANGJU_HEADER;
  return SchoolColor.DAEDEOK_HEADER;
}

export const checkSchoolSelect = (school: SchoolConstant): SchoolColor => {
  if (school === SchoolConstant.DAEGU) return SchoolColor.DAEGU_SELECT;
  if (school === SchoolConstant.GWANGJU) return SchoolColor.GWANGJU_SELECT;
  return SchoolColor.DAEDEOK_SELECT;
}

export const checkSchoolContact = (school: SchoolConstant): SchoolColor => {
  if (school === SchoolConstant.DAEGU) return SchoolColor.DAEGU_CONTACT;
  if (school === SchoolConstant.GWANGJU) return SchoolColor.GWANGJU_CONTACT;
  return SchoolColor.DAEDEOK_CONTACT;
}
