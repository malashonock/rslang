import { useLayoutEffect } from 'react';
import { getDayliStatistic } from '../../api/statistics';
import { useAppSelector } from '../../store/hooks';
import { getChart } from '../../utils/statistic';
import StatChart from './Chart';
import style from './Statistics.module.scss';

const LongStatistic = (): JSX.Element => {
  return (
    <section className={style.infoArea}>
      <StatChart />
    </section>
  );
};

export default LongStatistic;
