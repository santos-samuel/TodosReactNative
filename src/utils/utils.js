export const dateToDDMMYYY = (date) => {
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [
    (dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    date.getFullYear(),
  ].join('/');
};

export const incrementDateByDays = (date, daysToBeAdded) => {
  return new Date(date.getTime() + 1000 * 60 * 60 * 24 * daysToBeAdded);
};
