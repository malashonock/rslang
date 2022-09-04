import moment from 'moment';

const getNowDate = (): string => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const get10LastDays = (): string[] => {
  const dateEnd = moment();
  const dateStart = moment().subtract(10, 'days').calendar();
  const current = moment(dateStart);
  const dates = [];

  while (current.isBefore(dateEnd)) {
    dates.push(current.format('YYYY-MM-DD'));
    current.add(1, 'days');
  }
  return dates;
};

export const dateToYYYYMMDD = (date: Date): string => date.toString().slice(0, 10);

export default getNowDate;