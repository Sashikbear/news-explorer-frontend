const getDays = (date, n) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - n);
  return newDate.toISOString().substring(0, 10);
};

export { getDays };
