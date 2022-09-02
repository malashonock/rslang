import { Card } from 'react-bootstrap';
import style from './Statistics.module.scss';
import audio from '../../assets/icons/audio-waves.png';
import agile from '../../assets/icons/agile.png';

const DayliStatistics = (): JSX.Element => {
  const wordsCount = 0;

  return (
    <section className={style.team}>
      <Card className={style.card}>
        <Card.Body className={style.cardElements}>
          <span className={style.wordsCount}>0</span>
          <Card.Title>WORDS</Card.Title>
          <Card.Subtitle>were learned today</Card.Subtitle>
        </Card.Body>
      </Card>
      <Card className={style.card}>
        <Card.Header className="bg-primary text-white d-flex justify-content-between">
          <img src={agile} alt="waves icon" style={{ width: '2rem' }} />
          <h4>Sprint</h4>
        </Card.Header>
        <Card.Body className={style.cardElements}>
          <Card.Title>words per day</Card.Title>
          <Card.Title>accuracy</Card.Title>
          <Card.Title>in a row</Card.Title>
        </Card.Body>
      </Card>
      <Card className={style.card}>
        <Card.Header className="bg-primary text-white d-flex justify-content-between">
          <img src={audio} alt="waves icon" style={{ width: '2rem' }} />
          <h4>Audio challenge</h4>
        </Card.Header>
        <Card.Body className={style.cardElements}>
          <Card.Title>words per day</Card.Title>
          <Card.Title>accuracy</Card.Title>
          <Card.Title>in a row</Card.Title>
        </Card.Body>
      </Card>
    </section>
  );
};

export default DayliStatistics;
