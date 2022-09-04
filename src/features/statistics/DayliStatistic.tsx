import { Card } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useLayoutEffect, useState } from 'react';
import style from './Statistics.module.scss';
import audio from '../../assets/icons/audio-waves.png';
import agile from '../../assets/icons/agile.png';
import result from '../../assets/icons/mission.png';
import dayliresult from '../../assets/icons/dayliresults.png';
import { getDayliStatistic } from '../../api/statistics';
import { useAppSelector } from '../../store/hooks';
import { GameStatistic, Statistic } from '../../model/Statistic';
import parsingStatisticPerDay, { INITIAL_VALUES_GAME_STATISTICS } from '../../utils/statistic';

const DayliStatistics = (): JSX.Element => {
  const [audioChallengeStat, setAudioChallengeStat] = useState<GameStatistic>(
    INITIAL_VALUES_GAME_STATISTICS
  );
  const [dictionaryStat, setDictionaryStat] = useState<GameStatistic>(
    INITIAL_VALUES_GAME_STATISTICS
  );
  const [sprintStat, setSprintStat] = useState<GameStatistic>(INITIAL_VALUES_GAME_STATISTICS);
  const [totalStat, setTotalStat] = useState<GameStatistic>(INITIAL_VALUES_GAME_STATISTICS);

  const { id } = useAppSelector((state) => state.authorization);

  useLayoutEffect(() => {
    const loadStat = async () => {
      const stat = await getDayliStatistic(id);
      const { sprint, audioChallenge, dictionary } = parsingStatisticPerDay(stat);
      setSprintStat(sprint);
      setAudioChallengeStat(audioChallenge);
      setDictionaryStat(dictionary);
      setTotalStat({
        totalWords: sprint.totalWords + audioChallenge.totalWords + dictionaryStat.totalWords,
        guessedWords:
          sprint.guessedWords + audioChallenge.guessedWords + dictionaryStat.guessedWords,
        learnedWords:
          sprint.learnedWords + audioChallenge.learnedWords + dictionaryStat.learnedWords,
        maxGuessedSeries: Math.max(
          sprint.maxGuessedSeries,
          audioChallenge.maxGuessedSeries,
          dictionaryStat.maxGuessedSeries
        ),
        newWords: sprint.newWords + audioChallenge.newWords,
        persent:
          Math.trunc(
            ((sprint.learnedWords + audioChallenge.learnedWords + dictionaryStat.learnedWords) /
              (sprint.totalWords + audioChallenge.totalWords + dictionaryStat.learnedWords)) *
              100
          ) || 0,
      });
      // alert(JSON.stringify(sprint));
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadStat();
  }, [id]);

  return (
    <section className={style.team}>
      <Card className={style.card}>
        <Card.Body className={(style.cardElements, style.circle)}>
          <CircularProgressbarWithChildren
            value={totalStat.learnedWords}
            maxValue={totalStat.totalWords}
          >
            <img src={result} alt="You result" />
            <span className={style.wordsCount}>
              {totalStat.learnedWords} <span>of {totalStat.totalWords}</span>
            </span>
            <Card.Title>WORDS</Card.Title>
            <Card.Subtitle>were learned today</Card.Subtitle>
          </CircularProgressbarWithChildren>
        </Card.Body>
      </Card>
      <Card className={style.card}>
        <Card.Header className="bg-primary text-white d-flex justify-content-between">
          <img src={agile} alt="waves icon" />
          <h4>Sprint</h4>
        </Card.Header>
        <Card.Body className={style.cardElements}>
          <Card.Title>
            <span className="text-primary">{sprintStat.newWords}</span> new words per day
          </Card.Title>
          <Card.Title>
            <span className="text-primary">{sprintStat.persent}</span> accuracy
          </Card.Title>
          <Card.Title>
            <span className="text-primary">{sprintStat.maxGuessedSeries}</span> in a row
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className={style.card}>
        <Card.Header className="bg-primary text-white d-flex justify-content-between">
          <img src={audio} alt="waves icon" />
          <h4>Audio challenge</h4>
        </Card.Header>
        <Card.Body className={style.cardElements}>
          <Card.Title>
            <span className="text-primary">{audioChallengeStat.newWords}</span> new words per day
          </Card.Title>
          <Card.Title>
            <span className="text-primary">{audioChallengeStat.persent}</span> accuracy
          </Card.Title>
          <Card.Title>
            <span className="text-primary">{audioChallengeStat.maxGuessedSeries}</span> in a row
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className={style.card}>
        <Card.Header className="bg-primary text-white d-flex justify-content-between">
          <img src={dayliresult} alt="result icon" />
          <h4>Statistics per day</h4>
        </Card.Header>
        <Card.Body className={style.cardElements}>
          <Card.Title>
            <span className="text-primary">{totalStat.newWords}</span> new words per day
          </Card.Title>
          <Card.Title>
            <span className="text-primary">{totalStat.learnedWords}</span> learned
          </Card.Title>
          <Card.Title>
            <span className="text-primary">{totalStat.persent}</span> accuracy
          </Card.Title>
        </Card.Body>
      </Card>
    </section>
  );
};

export default DayliStatistics;
