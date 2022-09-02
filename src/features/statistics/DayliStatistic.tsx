import { Grid, Paper, styled, Typography } from '@mui/material';
import StatChart from './Chart';
import style from './Statistics.module.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DayliStatistics = (): JSX.Element => {
  const wordsCount = 0;

  return (
    <>
      <Paper elevation={0} className={style.infoArea}>
        {/* <Typography variant="h5" component="h5">
          Dayli statistics:
        </Typography> */}
        <Grid container spacing={4}>
          <Grid item xs={3} spacing={4}>
            <Item>
              <Typography variant="h2">
                <strong>{wordsCount}</strong>
              </Typography>
              <Typography variant="h3">words</Typography>
              <Typography variant="h6">were learned</Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Typography variant="h6">
                <strong>Audio challenge</strong>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Typography variant="h6">
                <strong>Sprint</strong>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} className={style.infoArea}>
        <StatChart />
      </Paper>
    </>
  );
};

export default DayliStatistics;
