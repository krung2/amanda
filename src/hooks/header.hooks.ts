import { useState } from "react";
import { SchoolConstant } from "../libs/constants/schoolConstant";

const HeaderHooks = () => {

  const [school, setSchool] = useState<number>(SchoolConstant.GWANGJU);

  return {
    school,
    setSchool,
  }
}

export default HeaderHooks;