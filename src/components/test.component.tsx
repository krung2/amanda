import React, { useEffect, useState } from "react";
import { getAllExcelData } from "../libs/apis/getExcelData";
import { SchoolConstant } from "../libs/constants/schoolConstant";
import { TeamProfile } from "../libs/constants/teamProfile";

const TestComponent: React.FC = () => {

  const [dague, setDaegue] = useState<string[][]>([]);
  const [daedeok, setDaedeok] = useState<string[][]>([]);
  const [gwangju, setGwangju] = useState<string[][]>([]);

  const testConnenct = async () => {
    try {
      const data = await getAllExcelData();
      console.log(data.valueRanges[SchoolConstant.DAEGU].values);
      console.log(data.valueRanges[SchoolConstant.DAEDEOK].values);
      console.log(data.valueRanges[SchoolConstant.GWANGJU].values);
      console.log(data.valueRanges[SchoolConstant.DAEGU].values[0][TeamProfile.MEMBER1]);
      console.log(data.valueRanges[SchoolConstant.DAEGU].values[0][TeamProfile.MEMBER2]);
      console.log(data.valueRanges[SchoolConstant.DAEGU].values[0][TeamProfile.GITHUB1]);
      console.log(data.valueRanges[SchoolConstant.DAEGU].values[0][TeamProfile.GITHUB2]);
      console.log(data.valueRanges[SchoolConstant.DAEGU].values[0][TeamProfile.POSITION1]);
      console.log(data.valueRanges[SchoolConstant.DAEGU].values[0][TeamProfile.POSITION2]);
      console.log(data.valueRanges[SchoolConstant.DAEGU].values[0][TeamProfile.INTRO]);
      console.log(data.valueRanges[SchoolConstant.DAEGU].values[0][TeamProfile.CONTACT]);

      setDaegue(data.valueRanges[SchoolConstant.DAEGU].values);
      setDaedeok(data.valueRanges[SchoolConstant.DAEDEOK].values);
      setGwangju(data.valueRanges[SchoolConstant.GWANGJU].values);

    } catch (err) {
      console.log(err);
    }
  }

  const dagueJSX = () => dague.map((data: string[]) => {
    return (
      <div>
        <h3>{data[TeamProfile.MEMBER1]}     {data[TeamProfile.MEMBER2]}</h3>
        <h5>{data[TeamProfile.GITHUB1]}     {data[TeamProfile.GITHUB2]}</h5>
        <h6>{data[TeamProfile.POSITION1]}     {data[TeamProfile.POSITION2]}</h6>
        <p>{data[TeamProfile.INTRO]}</p>
        <p>{data[TeamProfile.CONTACT]}</p> <br /> <br />
      </div>
    )
  });

  useEffect(() => {
    testConnenct();
  }, [])

  return (
    <div>
      {dagueJSX()}
    </div>
  )
}

export default TestComponent;