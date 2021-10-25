import React from "react";
import * as S from './styles';
import { ReactComponent as InstagramSVG } from '../../../assets/img/instagram.svg';
import { ContentTypes } from "../../../libs/constants/contactTypes";
import styled from "styled-components";
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import { checkSchoolSelect } from "../../../utils/CheckSchool";
import { IUserCardProps } from "../../../libs/interfaces/IUserCardProps";
import { checkDiscordType, checkKakaoType, checkSchoolType } from "../../../utils/checkType";
import { userClick } from "../../../utils/userCardUtil";

const UserCardComponent = (
  { cardInfo }: { cardInfo: IUserCardProps },
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
    daedoekTeam,
    school,
    isMatch,
  } = cardInfo;

  const Instagram = styled(InstagramSVG) <{ school: SchoolConstant }>`
  width: 20px;
  height: 20px;
  path {
    fill: ${(props) => (checkSchoolSelect(props.school))}!important;
  }
  `

  return (
    <S.CardContainer isMatch={isMatch}>
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
          {
            !isMatch &&
            <S.CheckBoxs>
              <S.GwangjuCheckBox teamCheck={checkSchoolType(gwangjuTeam)} />
              <S.DaeguCheckBox teamCheck={checkSchoolType(daeguTeam)} />
              <S.DaedeokCheckBox teamCheck={checkSchoolType(daedoekTeam)} />
            </S.CheckBoxs>
          }
        </S.SchoolCheckBox>
      </S.UserInfoContainer>
      <S.TeamContainer>
        <S.TeamIntro fontLength={intro.length}>
          {intro}
        </S.TeamIntro>
        {
          !isMatch &&
          <S.TeamContactContainer school={school} onClick={() => userClick(contactType, contact)}>
            {contactType === ContentTypes.DISCORD && <S.TeamContactImg src={checkDiscordType(school)} />}
            {contactType === ContentTypes.INSTAGRAM && <Instagram school={school} />}
            {contactType === ContentTypes.KAKAOTALK && <S.TeamContactImg src={checkKakaoType(school)} />}
            <S.TeamContact school={school} >
              {contactType === ContentTypes.INSTAGRAM && '@'}{contact}
            </S.TeamContact>
          </S.TeamContactContainer>
        }
      </S.TeamContainer>
    </S.CardContainer >
  )
}

export default UserCardComponent;