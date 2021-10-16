import React from "react";
import * as S from './styles';
import UserCardComponent from "./userCard/UserCard.component";

const UserListComponent: React.FC = () => {

  return (
    <S.CardsContainer>
      <UserCardComponent />
      <UserCardComponent />
      <UserCardComponent />
    </S.CardsContainer >
  )
}

export default UserListComponent;