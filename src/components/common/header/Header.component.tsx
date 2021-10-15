import React from "react";
import * as S from './styles';

const HeaderComponent: React.FC = () => {

  return (
    <S.HeaderFrame>
      <S.LogoName>Amanda</S.LogoName>
      <S.SiteMent>
        우리 팀과 딱 맞는 팀들을 찾고있다면 <br />
        <S.PointMent>아만다</S.PointMent>를 통해 원하는
        <S.PointMent>포지션별</S.PointMent>로 팀을 찾아보세요!
      </S.SiteMent>
    </S.HeaderFrame>
  )
}

export default HeaderComponent;