import React, { useEffect } from "react";
import UserCard from "../hooks/userCard";
import { TeamProfile } from "../libs/constants/teamProfile";

const TestComponent: React.FC = () => {

  const { dague, daedeok, gwangju, userList } = UserCard();

  const dagueJSX = (): JSX.Element[] => dague.map((data: string[]) => {
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

  const daedeokJSX = (): JSX.Element[] => daedeok.map((data: string[]) => {
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

  const gwangjuJSX = (): JSX.Element[] => gwangju
    .map((data: string[]) => {
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
    userList();
  }, [])

  return (
    <div>
      {dagueJSX()}
      {daedeokJSX()}
      {gwangjuJSX()}
    </div>
  )
}

export default TestComponent;