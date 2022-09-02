import { Paper, Alert, AlertTitle, Button, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import DayliStatistics from './DayliStatistic';

import style from './Statistics.module.scss';

const Statistics = (): JSX.Element => {
  const userAuth = useAppSelector((state) => state.authorization);

  return (
    <>
      <Typography variant="h5" component="h5" className={style.infoArea}>
        {userAuth.name} statistics
      </Typography>
      {userAuth.authorizeStatus && <DayliStatistics />}
    </>
  );
};

export default Statistics;
