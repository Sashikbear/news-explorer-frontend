const monthConverter = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December',
};

export const dateConverter = (date) => {
  const [MMM, DD, YYYY] = new Date(date).toString().slice(4, 15).split(' ');
  return `${monthConverter[MMM]} ${DD}, ${YYYY}`;
};
