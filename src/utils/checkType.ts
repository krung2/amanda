import { SchoolConstant } from "../libs/constants/schoolConstant";
import GwangjuKakao from '../assets/img/kakao.svg';
import DaeguKakao from '../assets/img/DaeguKakao.svg';
import DaedeokKakao from '../assets/img/daedeokKakao.svg';
import GwangjuDiscord from '../assets/img/discord.svg';
import DaeguDiscord from '../assets/img/daeguDiscord.svg';
import DaedeokDiscord from '../assets/img/daedeokDiscord.svg';
import { TeamCheckType } from "../libs/constants/teamcheckType";

export const checkKakaoType = (school: SchoolConstant): string => {
  if (school === SchoolConstant.DAEDEOK) return DaedeokKakao;
  if (school === SchoolConstant.DAEGU) return DaeguKakao;
  return GwangjuKakao;
}

export const checkDiscordType = (school: SchoolConstant): string => {
  if (school === SchoolConstant.DAEDEOK) return DaedeokDiscord;
  if (school === SchoolConstant.DAEGU) return DaeguDiscord;
  return GwangjuDiscord;
}

export const checkSchoolType = (team: boolean | undefined): TeamCheckType => {
  if (team === false) return TeamCheckType.NOTHAVE;
  if (team === true) return TeamCheckType.HAVE;
  return TeamCheckType.NOTAPPLICABLE;
}
