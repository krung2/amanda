import { useState } from "react";
import { getAllExcelData } from "../libs/apis/getExcelData";
import { SchoolConstant } from "../libs/constants/schoolConstant";
import { IResProfileData } from "../libs/interfaces/IExcelData";
import { checkNullOrUndefindArray } from "../utils/checkNullOrUndefind";

const UserCard = () => {

  const [dague, setDaegue] = useState<string[][]>([]);
  const [daedeok, setDaedeok] = useState<string[][]>([]);
  const [gwangju, setGwangju] = useState<string[][]>([]);

  const userList = async () => {
    try {
      const data: IResProfileData = await getAllExcelData();
      setDaegue(checkNullOrUndefindArray<string[][]>(data.valueRanges[SchoolConstant.DAEGU].values));
      setDaedeok(checkNullOrUndefindArray<string[][]>(data.valueRanges[SchoolConstant.DAEDEOK].values));
      setGwangju(checkNullOrUndefindArray<string[][]>(data.valueRanges[SchoolConstant.GWANGJU].values));
    } catch (err) { }
  }

  return {
    dague,
    daedeok,
    gwangju,
    userList,
  }
}

export default UserCard;