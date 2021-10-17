import { atom } from "recoil"
import { SchoolConstant } from "../../libs/constants/schoolConstant"

export const schoolState = atom<SchoolConstant>({
  key: 'schoolState',
  default: SchoolConstant.GWANGJU
})