import { SchoolConstant } from "../libs/constants/schoolConstant";
import GwangjuDiscord from '../assets/img/discord.svg';
import DaeguDiscord from '../assets/img/daeguDiscord.svg';
import DisableDiscord from '../assets/img/disableDiscord.svg';
import DaedeokDiscord from '../assets/img/daedeokDiscord.svg';
import { TeamCheckType } from "../libs/constants/teamcheckType";

export const checkDiscordType = (school: SchoolConstant, isAllMatch: boolean): string => {
  if (isAllMatch === true) return DisableDiscord
  if (school === SchoolConstant.DAEDEOK) return DaedeokDiscord;
  if (school === SchoolConstant.DAEGU) return DaeguDiscord;
  return GwangjuDiscord;
}

export const checkSchoolType = (team: boolean | undefined): TeamCheckType => {
  if (team === false) return TeamCheckType.NOTHAVE;
  if (team === true) return TeamCheckType.HAVE;
  return TeamCheckType.NOTAPPLICABLE;
}
