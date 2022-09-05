import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLayoutEffect, useState } from 'react';
import { get10LastDays } from '../../utils/date';
import { getDayliStatistic } from '../../api/statistics';
import { getChartData } from '../../utils/statistic';
import { useAppSelector } from '../../store/hooks';
import { Statistic } from '../../model/Statistic';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const optionsLine = {
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

export const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = get10LastDays();

const StatChart = (): JSX.Element => {
  const [chartValues1, setChartValues1] = useState<number[]>([]);
  const [chartValues2, setChartValues2] = useState<number[]>([]);

  const { id } = useAppSelector((state) => state.authorization);

  useLayoutEffect(() => {
    const loadStat = async (): Promise<void> => {
      const userStatistic = await getDayliStatistic(id);
      const summaryStat = getChartData(userStatistic);
      const tempChartValue1: number[] = [];
      const tempChartValue2: number[] = [];
      const tempChartValue3: number[] = [];
      summaryStat.forEach((stat) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        tempChartValue1.push(stat.newWords);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        tempChartValue2.push(stat.learnedWords);
        tempChartValue3.push(0);
      });
      setChartValues1(tempChartValue1);
      setChartValues2(tempChartValue2);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/no-empty-function
    loadStat().catch(() => {});
  }, [id]);

  const dataLineChart = {
    type: 'line',
    labels,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      filler: {
        propagate: true,
      },
    },
    datasets: [
      {
        label: 'Total words learned',
        data: chartValues2,
        borderColor: 'rgba(13, 110, 253, 1)',
        backgroundColor: 'rgba(13, 110, 253, 1)',
        fill: 'start',
        pointStyle: 'circle',
        pointRadius: 10,
      },
    ],
  };

  const dataBarChart = {
    type: Bar,
    labels,
    datasets: [
      {
        label: 'New words by day',
        data: chartValues1,
        borderColor: 'rgba(13, 110, 253, 1)',
        backgroundColor: 'rgba(13, 110, 253, 1)',
      },
    ],
  };

  return (
    <>
      <Line data={dataLineChart} />
      <Bar options={optionsBar} data={dataBarChart} />
    </>
  );
};

export default StatChart;
