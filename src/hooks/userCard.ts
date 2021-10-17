import { useState } from "react";
import { getDaedeokData, getDaeguData, getGwangjuData } from "../libs/apis/getData";
import { SchoolConstant } from "../libs/constants/schoolConstant";
import { ISchoolData } from "../libs/interfaces/IUserData";

const UserCard = () => {

  const [dague, setDaegue] = useState<ISchoolData[]>([]);
  const [daedeok, setDaedeok] = useState<ISchoolData[]>([]);
  const [gwangju, setGwangju] = useState<ISchoolData[]>([]);

  const userList = async () => {
    try {
      const studentDatas: ISchoolData[][] = await Promise.all([
        getDaeguData(),
        getDaedeokData(),
        getGwangjuData(),
      ]);

      setDaegue(studentDatas[SchoolConstant.DAEGU]);
      setDaedeok(studentDatas[SchoolConstant.DAEDEOK]);
      setGwangju(studentDatas[SchoolConstant.GWANGJU]);
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