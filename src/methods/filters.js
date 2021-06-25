export function date(time) {
  let returnDate;
  if (!time) {
    returnDate = '無';
  } else {
    const newDate = new Date(time * 1000);
    returnDate = newDate.toLocaleDateString();
  }
  return returnDate;
}

export function date2(time) {
  const newDate = new Date(time * 1000);
  return newDate.toLocaleDateString();
}
