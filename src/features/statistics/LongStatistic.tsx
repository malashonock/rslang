import Chart from './Chart';
import style from './Statistics.module.scss';

const LongStatistic = (): JSX.Element => {
  return (
    <section className={style.infoArea}>
      <Chart />
    </section>
  );
};

export default LongStatistic;
