import React, { RefObject, useCallback, useEffect, useRef } from "react";
import { ReactComponent as ReverseTriangle } from '../../../assets/img/Polygon 1.svg';
import * as S from './styles';
import selectHooks from "../../../hooks/select.hooks";
import { Position } from "../../../libs/constants/position";
import HeaderHooks from "../../../hooks/header.hooks";
import styled from "styled-components";
import { SchoolConstant } from "../../../libs/constants/schoolConstant";
import { checkSchoolSelect } from "../../../utils/CheckSchool";

const SelectComponent: React.FC = () => {

  const { isSelectOpen, closeModal, openModal, position, modalClicked } = selectHooks();
  const { school } = HeaderHooks();

  const inputRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent): void => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        closeModal();
      }
    },
    [inputRef, closeModal]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const selectOptionContent: JSX.Element[] = Object.values(Position)
    .map(value => {
      return (
        <S.ModalContent
          school={school}
          key={value}
          position={value === position}
          onClick={() => modalClicked(value)}
        >
          {value}
        </S.ModalContent>
      )
    });

  const Triangle = styled(ReverseTriangle) <{ school: SchoolConstant }>`
    width: .5rem;
    height: .4rem;
    path {
      fill: ${(props) => (checkSchoolSelect(props.school))}!important;
    }
  `

  return (
    <S.Container>
      {
        isSelectOpen ?
          <S.OpenContainer ref={inputRef} >
            <S.OpenContent>
              {selectOptionContent}
            </S.OpenContent>
          </S.OpenContainer >
          : <S.ClosedContainer onClick={() => openModal()}>
            <S.DisplayFlex school={school}>
              {position} &nbsp;
              <Triangle school={school} />
            </S.DisplayFlex>
          </S.ClosedContainer>
      }
    </S.Container>
  )
}

export default SelectComponent;