import DayliStatistics from './DailyStatistics';
import LongStatistic from './LongTermStatistic';

const Statistics = (): JSX.Element => {
  return (
    <>
      <DayliStatistics />
      <LongStatistic />
    </>
  );
};

export default Statistics;
