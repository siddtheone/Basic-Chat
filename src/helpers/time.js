export const getTime = (time, is12) => {
  const timeObj = new Date(time);
  let hours = timeObj.getHours();
  let minutes = '0' + timeObj.getMinutes();
  let suffix = 'AM';
  if(is12 === 'true' && hours > 12) {
    suffix = 'PM';
    hours -= 12;
  }

  return `${hours}:${minutes.slice(0, 2)} ${is12 === 'true' ? suffix : ''}`;
}
