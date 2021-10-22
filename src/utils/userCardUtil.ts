import { ContentTypes } from "../libs/constants/contactTypes";

export const userClick = (contactType: string, contact: string): void => {
  if (contactType === ContentTypes.INSTAGRAM) {
    window.open(`https://www.instagram.com/${contact}`);
    return;
  }

  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = contact;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
  alert('클립보드에 복사되었습니다');
}