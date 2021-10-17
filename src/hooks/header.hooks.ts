import { useRecoilState } from "recoil";
import { schoolState } from "./atoms/header.atom";

const HeaderHooks = () => {

  const [school, setSchool] = useRecoilState(schoolState);

  return {
    school,
    setSchool,
  }
}

export default HeaderHooks;