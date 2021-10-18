import React from "react";
import * as S from './styles';
import instagram from '../../../assets/img/instagram.svg';
import discord from '../../../assets/img/discord.svg';
import { ISchoolData } from "../../../libs/interfaces/IUserData";
import { ContentTypes } from "../../../libs/constants/contactTypes";
import kakao from '../../../assets/img/kakao.svg';
import HeaderHooks from "../../../hooks/header.hooks";

const UserCardComponent = (
  { cardInfo }: { cardInfo: ISchoolData }
): JSX.Element => {

  const { school } = HeaderHooks();

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
          {contactType === ContentTypes.DISCORD && <S.TeamContactImg src={discord} />}
          {contactType === ContentTypes.INSTAGRAM && <S.TeamContactImg src={instagram} />}
          {contactType === ContentTypes.KAKAOTALK && <S.TeamContactImg src={kakao} />}
          <S.TeamContact>
            {contact}
          </S.TeamContact>
        </S.TeamContactContainer>
      </S.TeamContainer>
    </S.CardContainer >
  )
}

export default UserCardComponent;