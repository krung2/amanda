import { SchoolConstant } from "../constants/schoolConstant";
import { ISchoolData } from "./IUserData";

export interface IUserCardProps extends ISchoolData {
  isMatch: boolean;
  school: SchoolConstant;
}