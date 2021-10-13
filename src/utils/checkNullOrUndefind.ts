export const checkNullOrUndefindArray = <T>(data: T) => {

  if (data === undefined || data === null) return [];
  return data;
}