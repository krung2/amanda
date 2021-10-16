import React from "react";
import * as S from './styles';
import phone from '../../../assets/img/phone.svg';

const UserCardComponent: React.FC = () => {

  return (
    <S.CardContainer>
      <S.UserInfoContainer>
        <S.UserInfo>
          <S.UserInfoBox>
            <S.UserPosition>
              백엔드
            </S.UserPosition>
            <S.UserName>
              신중빈
            </S.UserName>
            <S.UserGithub onClick={() => window.open(`https://github.com/krung2`)}>
              kurng2
            </S.UserGithub>
          </S.UserInfoBox>
        </S.UserInfo>
        <S.UserInfo>
          <S.UserPosition>
            프론트엔드
          </S.UserPosition>
          <S.UserName>
            손민재
          </S.UserName>
          <S.UserGithub onClick={() => window.open(`https://github.com/Clzzi`)}>
            Clzzi
          </S.UserGithub>
        </S.UserInfo>
      </S.UserInfoContainer>
      <S.TeamContainer>
        <S.TeamIntro>
          안뇽, 우리는 팀
        </S.TeamIntro>
        <S.TeamContactContainer>
          <S.TeamContactImg src={phone} />
          <S.TeamContact>
            01023954337
          </S.TeamContact>
        </S.TeamContactContainer>
      </S.TeamContainer>
    </S.CardContainer >
  )
}

export default UserCardComponent;