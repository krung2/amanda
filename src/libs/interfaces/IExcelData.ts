export interface ISchoolProfile {
  majorDimension: string;
  range: string;
  values: string[][];
}

export interface IResProfileData {

  spreadsheetId: string;
  valueRanges: ISchoolProfile[];
}