// Taken from here: https://stackoverflow.com/a/46545530
const shuffle = <T>(array: T[]): T[] => {
  return array
    .map((element) => ({ element, sortIndex: Math.random() }))
    .sort((a, b) => a.sortIndex - b.sortIndex)
    .map(({ element }) => element);
};

export default shuffle;
