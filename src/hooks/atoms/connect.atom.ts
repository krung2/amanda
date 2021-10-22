import { atom } from "recoil";
import { IConnect } from "../../libs/interfaces/IConnect";

export const connectState = atom<IConnect[]>({
  key: 'connectState',
  default: []
})