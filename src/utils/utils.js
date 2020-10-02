export const dateToDDMMYYY = (dateInTime) => {
  // date comes from getTime()
  let date = new Date(dateInTime);
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [
    (dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    date.getFullYear(),
  ].join('/');
};

export const incrementDateByDays = (date, daysToBeAdded) => {
  // date from getTime()
  return new Date(date + 1000 * 60 * 60 * 24 * daysToBeAdded).getTime();
};
