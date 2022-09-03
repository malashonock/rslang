const getNowDate = (): string => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
};

export default getNowDate;
