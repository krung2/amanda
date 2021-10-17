import { Position } from "../libs/constants/position";

export const positionFilter = (key1: string, key2: string, value: Position): boolean => {
  if (value === Position.ALL) return true;
  if (value === key1 || value === key2) return true;

  return false
}