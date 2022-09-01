import { Paper, Alert, AlertTitle, Button } from '@mui/material';
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
import { useAppSelector } from '../../store/hooks';
import style from './Statistics.module.scss';

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Statistics = (): JSX.Element => {
  const userAuth = useAppSelector((state) => state.authorization);
  return (
    <>
      <h2>{userAuth.name} statistics</h2>
      {userAuth.authorizeStatus && (
        <Paper elevation={3} className={style.infoArea}>
          Goal
          <Bar options={options} data={data} />
        </Paper>
      )}
      {!userAuth.authorizeStatus && (
        <Paper elevation={3} className={style.infoArea}>
          <Alert severity="warning" className={style.loginForm}>
            <AlertTitle>Dear Guest.To view statistics, please register.</AlertTitle>
            <Button variant="outlined" color="info" href="/auth">
              {' '}
              I WANT SIGN UP
            </Button>
          </Alert>
        </Paper>
      )}
    </>
  );
};

export default Statistics;
