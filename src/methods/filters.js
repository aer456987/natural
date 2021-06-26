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

export function currency(num) {
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}
