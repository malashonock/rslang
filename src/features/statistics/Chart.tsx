import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLayoutEffect, useState } from 'react';
import { get10LastDays } from '../../utils/date';
import { getDayliStatistic } from '../../api/statistics';
import { getChart } from '../../utils/statistic';
import { useAppSelector } from '../../store/hooks';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  type: 'line',
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'User statistic',
      font: {
        size: 18,
      },
    },
  },
};

const labels = get10LastDays();

const StatChart = (): JSX.Element => {
  const [chartValues1, setChartValues1] = useState<number[]>([]);
  const [chartValues2, setChartValues2] = useState<number[]>([]);

  const { id } = useAppSelector((state) => state.authorization);

  useLayoutEffect(() => {
    const loadStat = async () => {
      const userStatistic = await getDayliStatistic(id);
      const summaryStat = getChart(userStatistic);
      const value1: number[] = [];
      const value2: number[] = [];
      summaryStat.forEach((stat) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        value1.push(stat.newWords);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        value2.push(stat.learnedWords);
      });
      setChartValues1(value1);
      setChartValues2(value2);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadStat();
  }, [id]);

  const data = {
    type: LinearScale,
    labels,
    datasets: [
      {
        label: 'New words',
        data: chartValues1,
        borderColor: 'rgba(242, 10, 10, 1)',
        backgroundColor: 'rgba(242, 10, 10, 1)',
      },
      {
        label: 'Learned words per day',
        data: chartValues2,
        borderColor: 'rgba(0, 125, 21, 1)',
        backgroundColor: 'rgba(0, 125, 21, 1)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default StatChart;
