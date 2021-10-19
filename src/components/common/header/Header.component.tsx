import React from "react";
import headerHooks from "../../../hooks/header.hooks";
import arrow from '../../../assets/img/arrow.svg';
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import SelectComponent from "../select/Select.component";
import * as S from './styles';

const HeaderComponent: React.FC = () => {

  const { school, setSchool } = headerHooks();

  return (
    <S.Header school={school}>
      <S.HeaderFrame>
        <S.LogoName school={school}>Amanda</S.LogoName>
        <S.DisplayFlex>
          <S.SiteMent>
            <div>
              우리 팀과 딱 맞는 팀들을 찾고있다면 <br />
              <S.PointMent school={school}>아만다</S.PointMent>를 통해 원하는
              <S.PointMent school={school}>포지션별</S.PointMent>로 팀을 찾아보세요!
            </div>
          </S.SiteMent>
          <S.FlexBlank />
          <div>
            <S.CompleteMatch schoolCheck={school}>
              매칭 완료 팀 <S.CompleteArrow src={arrow} />
            </S.CompleteMatch>
            <S.PositionSelect>
              <SelectComponent />
            </S.PositionSelect>
          </div>
        </S.DisplayFlex>
      </S.HeaderFrame>
      <S.SchoolContainer>
        <S.SchoolBox>
          <S.SchoolName
            school={school === SchoolConstant.GWANGJU}
            schoolCheck={school}
            onClick={() => setSchool(SchoolConstant.GWANGJU)}
          >
            광주
          </S.SchoolName>
          <S.SchoolName
            school={school === SchoolConstant.DAEGU}
            schoolCheck={school}
            onClick={() => setSchool(SchoolConstant.DAEGU)}
          >
            대구
          </S.SchoolName>
          <S.SchoolName
            school={school === SchoolConstant.DAEDEOK}
            schoolCheck={school}
            onClick={() => setSchool(SchoolConstant.DAEDEOK)}
          >
            대덕
          </S.SchoolName>
        </S.SchoolBox>
      </S.SchoolContainer>
    </S.Header>
  )
}

export default HeaderComponent;