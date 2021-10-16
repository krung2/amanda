import { useState } from "react";
import { Position } from "../libs/constants/position";

const SelectHooks = () => {

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>(Position.ALL);

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