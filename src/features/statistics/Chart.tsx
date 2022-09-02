import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'User statistic',
    },
  },
};

const labels = ['Monday', 'Tuesday', 'Wednes­day', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
  labels,
  datasets: [
    {
      label: 'New words',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(125, 119, 204, 0.5)',
    },
    {
      label: 'Learned words per day',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(00, 119, 204, 0.5)',
    },
  ],
};

const StatChart = (): JSX.Element => {
  return <Bar options={options} data={data} />;
};

export default StatChart;
