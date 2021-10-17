import { atom } from "recoil"
import { Position } from "../../libs/constants/position"

export const positionState = atom<Position>({
  key: 'positionState',
  default: Position.ALL
})