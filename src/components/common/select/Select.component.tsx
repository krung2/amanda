import React, { RefObject, useCallback, useEffect, useRef } from "react";
import selectHooks from "../../../hooks/select.hooks";
import ReverseTriangle from '../../../assets/img/Polygon 1.svg';
import * as S from './styles';

const SelectComponent: React.FC = () => {

  const { isSelectOpen, setIsSelectOpen, openModal } = selectHooks();

  const inputRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent): void => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsSelectOpen(false);
      }
    },
    [inputRef]
  );


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <S.Container>
      {
        isSelectOpen ?
          <S.OpenContainer ref={inputRef} >
            <S.OpenContent>
              <S.ModalContent>a</S.ModalContent>
              <S.ModalContent>s</S.ModalContent>
              <S.ModalContent>d</S.ModalContent>
              <S.ModalContent>f</S.ModalContent>
              <S.ModalContent>q</S.ModalContent>
            </S.OpenContent>
          </S.OpenContainer >
          : <S.ClosedContainer onClick={() => openModal()}>
            <S.FlexBlank />
            <S.DisplayFlex>
              무야홍 &nbsp; <S.Triangle src={ReverseTriangle} />
            </S.DisplayFlex>
            <S.FlexBlank />
          </S.ClosedContainer>
      }
    </S.Container>
  )
}

export default SelectComponent;