import React, { RefObject, useCallback, useEffect, useRef } from "react";
import ReverseTriangle from '../../../assets/img/Polygon 1.svg';
import * as S from './styles';
import selectHooks from "../../../hooks/select.hooks";
import { Position } from "../../../libs/constants/position";

const SelectComponent: React.FC = () => {

  const { isSelectOpen, closeModal, openModal, position, modalClicked } = selectHooks();

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
          key={value}
          position={value === position}
          onClick={() => modalClicked(value)}
        >
          {value}
        </S.ModalContent>
      )
    });

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
            <S.DisplayFlex>
              {position} &nbsp; <S.Triangle src={ReverseTriangle} />
            </S.DisplayFlex>
          </S.ClosedContainer>
      }
    </S.Container>
  )
}

export default SelectComponent;