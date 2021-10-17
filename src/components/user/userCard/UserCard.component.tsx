import React from "react";
import * as S from './styles';
import phone from '../../../assets/img/phone.svg';
import { ISchoolData } from "../../../libs/interfaces/IUserData";

const UserCardComponent = (
  { cardInfo }: { cardInfo: ISchoolData }
): JSX.Element => {

  const {
    name1,
    name2,
    github1,
    github2,
    position1,
    position2,
    intro,
    contactType,
    contact,
    daeguTeam,
    gwangjuTeam,
    deadeokTeam
  } = cardInfo;

  return (
    <S.CardContainer>
      <S.UserInfoContainer>
        <S.UserInfo>
          <S.UserInfoBox>
            <S.UserPosition>
              {position1}
            </S.UserPosition>
            <S.UserName>
              {name1}
            </S.UserName>
            <S.UserGithub onClick={() => window.open(`https://github.com/${github1}`)}>
              {github1}
            </S.UserGithub>
          </S.UserInfoBox>
        </S.UserInfo>
        <S.UserInfo>
          <S.UserPosition>
            {position2}
          </S.UserPosition>
          <S.UserName>
            {name2}
          </S.UserName>
          <S.UserGithub onClick={() => window.open(`https://github.com/${github2}`)}>
            {github2}
          </S.UserGithub>
        </S.UserInfo>
      </S.UserInfoContainer>
      <S.TeamContainer>
        <S.TeamIntro>
          {intro}
        </S.TeamIntro>
        <S.TeamContactContainer>
          <S.TeamContactImg src={phone} />
          <S.TeamContact>
            {contact}
          </S.TeamContact>
        </S.TeamContactContainer>
      </S.TeamContainer>
    </S.CardContainer >
  )
}

export default UserCardComponent;