import { useAppSelector } from '../../store/hooks';
import DayliStatistics from './DayliStatistic';
import LongStatistic from './LongStatistic';

import style from './Statistics.module.scss';

const Statistics = (): JSX.Element => {
  const userAuth = useAppSelector((state) => state.authorization);

  return (
    <>
      <h3 className={style.infoArea}>statistics</h3>
      <DayliStatistics />
      <LongStatistic />
    </>
  );
};

export default Statistics;
