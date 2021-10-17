import { useState } from "react";
import { useRecoilState } from "recoil";
import { Position } from "../libs/constants/position";
import { positionState } from "./atoms/select.atom";

const SelectHooks = () => {

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [position, setPosition] = useRecoilState(positionState);

  const openModal = () => setIsSelectOpen(true);
  const closeModal = () => setIsSelectOpen(false);

  const modalClicked = (value: Position) => {
    setPosition(value);
    closeModal();
  }

  return {
    isSelectOpen,
    openModal,
    closeModal,
    position,
    modalClicked,
  }
}

export default SelectHooks;