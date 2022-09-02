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
