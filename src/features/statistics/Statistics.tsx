import { Paper, Link, Alert, AlertTitle, Button } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import style from './Statistics.module.scss';

const Statistics = (): JSX.Element => {
  const userAuth = useAppSelector((state) => state.authorization);
  return (
    <>
      <h2>{userAuth.name} statistics</h2>
      {userAuth.authorizeStatus && (
        <Paper elevation={3} className={style.infoArea}>
          Goal
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
