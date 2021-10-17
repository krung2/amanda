import React, { useEffect } from "react";
import HeaderHooks from "../../hooks/header.hooks";
import SelectHooks from "../../hooks/select.hooks";
import UserCard from "../../hooks/userCard";
import { SchoolConstant } from "../../libs/constants/schoolConstant";
import { ISchoolData } from "../../libs/interfaces/IUserData";
import { checkNullCard } from "../../utils/checkNullOrUndefind";
import { positionFilter } from "../../utils/positionFilter";
import * as S from './styles';
import UserCardComponent from "./userCard/UserCard.component";

const UserListComponent: React.FC = () => {

  const { dague, daedeok, gwangju, userList } = UserCard();
  const { school } = HeaderHooks();
  const { position } = SelectHooks();

  useEffect(() => {
    userList()
  }, [])

  const daeguCard: JSX.Element[] = dague
    .filter(({ position1, position2 }: ISchoolData) => positionFilter(position1, position2, position))
    .filter((dagueData: ISchoolData) => checkNullCard(dagueData))
    .map((dagueData: ISchoolData) => {
      return <UserCardComponent key={dagueData.name1} cardInfo={dagueData} />
    })

  const daedeokCard: JSX.Element[] = daedeok
    .filter(({ position1, position2 }: ISchoolData) => positionFilter(position1, position2, position))
    .filter((daedeokData: ISchoolData) => checkNullCard(daedeokData))
    .map((daedeokData: ISchoolData) => {
      return <UserCardComponent key={daedeokData.name1} cardInfo={daedeokData} />
    })

  const gwangjuCard: JSX.Element[] = gwangju
    .filter(({ position1, position2 }: ISchoolData) => positionFilter(position1, position2, position))
    .filter((gwangjuData: ISchoolData) => checkNullCard(gwangjuData))
    .map((gwangjuData: ISchoolData) => {
      return <UserCardComponent key={gwangjuData.name1} cardInfo={gwangjuData} />
    })

  return (
    <S.CardsContainer>
      {school === SchoolConstant.GWANGJU && gwangjuCard}
      {school === SchoolConstant.DAEGU && daeguCard}
      {school === SchoolConstant.DAEDEOK && daedeokCard}
    </S.CardsContainer >
  )
}

export default UserListComponent;