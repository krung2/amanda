import React from "react";
import * as S from './styles';
import { ReactComponent as InstagramSVG } from '../../../assets/img/instagram.svg';
import { ReactComponent as KakaoSVG } from '../../../assets/img/kakao.svg';
import { ContentTypes } from "../../../libs/constants/contactTypes";
import styled from "styled-components";
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import { checkSchoolSelect } from "../../../utils/CheckSchool";
import { IUserCardProps } from "../../../libs/interfaces/IUserCardProps";
import { checkDiscordType, checkSchoolType } from "../../../utils/checkType";
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

  const Instagram = styled(InstagramSVG) <{ school: SchoolConstant, isAllMatch: boolean }>`
  width: 20px;
  height: 20px;
  path {
    fill: ${(props) => props.isAllMatch ? '#E0E0E0' : (checkSchoolSelect(props.school))}!important;
  }
  `

  const Kakao = styled(KakaoSVG) <{ school: SchoolConstant, isAllMatch: boolean }>`
  width: 20px;
  height: 20px;
  path {
    fill: ${(props) => props.isAllMatch ? '#E0E0E0' : (checkSchoolSelect(props.school))}!important;
  }
  `

  const isAllMatch = () => {
    let cnt = 0;
    if (daeguTeam) cnt++;
    if (gwangjuTeam) cnt++;
    if (daedoekTeam) cnt++;
    if (cnt === 2) return true;
    return false;
  }

  return (
    <S.CardContainer isMatch={isMatch} isAllMatch={isAllMatch()}>
      <S.UserInfoContainer>
        <S.UserInfo>
          <S.UserInfoBox>
            <S.UserPosition school={school} isAllMatch={isAllMatch()}>
              {position1}
            </S.UserPosition>
            <S.UserName
              onClick={() => window.open(`https://github.com/${github1}`)}
              isAllMatch={isAllMatch()}>
              {name1}
            </S.UserName>
            <S.UserGithub onClick={() => window.open(`https://github.com/${github1}`)}>
              {github1}
            </S.UserGithub>
          </S.UserInfoBox>
        </S.UserInfo>
        <S.UserInfo>
          <S.UserPosition school={school} isAllMatch={isAllMatch()}>
            {position2}
          </S.UserPosition>
          <S.UserName
            onClick={() => window.open(`https://github.com/${github2}`)}
            isAllMatch={isAllMatch()}
          >
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
        <S.TeamIntro fontLength={intro.length} isAllMatch={isAllMatch()}>
          {intro}
        </S.TeamIntro>
        {
          !isMatch &&
          <S.TeamContactContainer
            school={school}
            onClick={() => userClick(contactType, contact)}
            isAllMatch={isAllMatch()}
          >
            {contactType === ContentTypes.DISCORD && <S.TeamContactImg src={checkDiscordType(school, isAllMatch())} />}
            {contactType === ContentTypes.INSTAGRAM && <Instagram school={school} isAllMatch={isAllMatch()} />}
            {/* {contactType === ContentTypes.KAKAOTALK && <S.TeamContactImg src={checkKakaoType(school)} />} */}
            {contactType === ContentTypes.KAKAOTALK && <Kakao school={school} isAllMatch={isAllMatch()} />}
            <S.TeamContact
              school={school}
              fontLength={contact.length}
              isAllMatch={isAllMatch()}
            >
              {contactType === ContentTypes.INSTAGRAM && '@'}{contact}
            </S.TeamContact>
          </S.TeamContactContainer>
        }
      </S.TeamContainer>
    </S.CardContainer >
  )
}

export default UserCardComponent;