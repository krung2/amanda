import { useState } from "react";
import { SchoolConstant } from "../libs/constants/schoolConstant";
import { TeamProfile } from "../libs/constants/teamProfile";

const SelectHooks = () => {

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [school, setSchool] = useState<number>(SchoolConstant.GWANGJU);

  const openModal = () => setIsSelectOpen(true);

  return {
    isSelectOpen,
    setIsSelectOpen,
    school,
    setSchool,
    openModal
  }
}

export default SelectHooks;