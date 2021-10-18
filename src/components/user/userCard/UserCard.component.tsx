import React from "react";
import * as S from './styles';
import { ReactComponent as InstagramSVG } from '../../../assets/img/instagram.svg';
import { ISchoolData } from "../../../libs/interfaces/IUserData";
import { ContentTypes } from "../../../libs/constants/contactTypes";
import GwangjuKakao from '../../../assets/img/kakao.svg';
import DaeguKakao from '../../../assets/img/DaeguKakao.svg';
import DaedeokKakao from '../../../assets/img/daedeokKakao.svg';
import GwangjuDiscord from '../../../assets/img/discord.svg';
import DaeguDiscord from '../../../assets/img/daeguDiscord.svg';
import DaedeokDiscord from '../../../assets/img/daedeokDiscord.svg';
import HeaderHooks from "../../../hooks/header.hooks";
import styled from "styled-components";
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import { checkSchoolSelect } from "../../../utils/CheckSchool";
import { TeamCheckType } from "../../../libs/constants/teamcheckType";

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
    deadoekTeam
  } = cardInfo;

  const checkKakaoType = (): string => {
    if (school === SchoolConstant.DAEDEOK) return DaedeokKakao;
    if (school === SchoolConstant.DAEGU) return DaeguKakao;
    return GwangjuKakao;
  }

  const checkDiscordType = (): string => {
    if (school === SchoolConstant.DAEDEOK) return DaedeokDiscord;
    if (school === SchoolConstant.DAEGU) return DaeguDiscord;
    return GwangjuDiscord;
  }

  const checkSchoolType = (team: boolean | undefined): TeamCheckType => {
    if (team === false) return TeamCheckType.NOTHAVE;
    if (team === true) return TeamCheckType.HAVE;
    return TeamCheckType.NOTAPPLICABLE;
  }

  const Instagram = styled(InstagramSVG) <{ school: SchoolConstant }>`
  width: 20px;
  height: 20px;
  path {
    fill: ${(props) => (checkSchoolSelect(props.school))}!important;
  }
  `

  return (
    <S.CardContainer>
      <S.UserInfoContainer>
        <S.UserInfo>
          <S.UserInfoBox>
            <S.UserPosition school={school}>
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
          <S.UserPosition school={school}>
            {position2}
          </S.UserPosition>
          <S.UserName>
            {name2}
          </S.UserName>
          <S.UserGithub onClick={() => window.open(`https://github.com/${github2}`)}>
            {github2}
          </S.UserGithub>
        </S.UserInfo>
        <S.SchoolCheckBox>
          <S.CheckBoxs>
            <S.GwangjuCheckBox teamCheck={checkSchoolType(gwangjuTeam)} />
            <S.DaeguCheckBox teamCheck={checkSchoolType(daeguTeam)} />
            <S.DaedeokCheckBox teamCheck={checkSchoolType(deadoekTeam)} />
          </S.CheckBoxs>
        </S.SchoolCheckBox>
      </S.UserInfoContainer>
      <S.TeamContainer>
        <S.TeamIntro>
          {intro}
        </S.TeamIntro>
        <S.TeamContactContainer school={school}>
          {contactType === ContentTypes.DISCORD && <S.TeamContactImg src={checkDiscordType()} />}
          {contactType === ContentTypes.INSTAGRAM && <Instagram school={school} />}
          {contactType === ContentTypes.KAKAOTALK && <S.TeamContactImg src={checkKakaoType()} />}
          <S.TeamContact school={school}>
            {contact}
          </S.TeamContact>
        </S.TeamContactContainer>
      </S.TeamContainer>
    </S.CardContainer >
  )
}

export default UserCardComponent;