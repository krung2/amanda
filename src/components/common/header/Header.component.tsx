import React from "react";
import SelectHooks from "../../../hooks/select.hooks";
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import SelectComponent from "../select/Select.component";
import * as S from './styles';

const HeaderComponent: React.FC = () => {

  const { school } = SelectHooks();

  return (
    <S.Header>
      <S.HeaderFrame>
        <S.LogoName>Amanda</S.LogoName>
        <S.DisplayFlex>
          <S.SiteMent>
            우리 팀과 딱 맞는 팀들을 찾고있다면 <br />
            <S.PointMent>아만다</S.PointMent>를 통해 원하는
            <S.PointMent>포지션별</S.PointMent>로 팀을 찾아보세요!
          </S.SiteMent>
          <S.FlexBlank />
          <S.PositionSelect>
            <SelectComponent />
          </S.PositionSelect>
        </S.DisplayFlex>
      </S.HeaderFrame>
      <S.SchoolContainer>
        <S.SchoolBox>
          <S.SchoolName school={school === SchoolConstant.GWANGJU}>
            <S.FlexBlank />
            광주
            <S.FlexBlank />
          </S.SchoolName>
          <S.SchoolName school={school === SchoolConstant.DAEGU}>
            <S.FlexBlank />
            대구
            <S.FlexBlank />
          </S.SchoolName>
          <S.SchoolName school={school === SchoolConstant.DAEDEOK}>
            <S.FlexBlank />
            대덕
            <S.FlexBlank />
          </S.SchoolName>
        </S.SchoolBox>
      </S.SchoolContainer>
    </S.Header>
  )
}

export default HeaderComponent;