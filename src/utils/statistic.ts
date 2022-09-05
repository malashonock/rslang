import {
  Statistic,
  GameStatistic,
  SummaryGameStatistic,
  StatisticForChar,
} from '../model/Statistic';
import { dateToYYYYMMDD, get10LastDays } from './date';

export const INITIAL_VALUES_GAME_STATISTICS: GameStatistic = {
  learnedWords: 0,
  guessedWords: 0,
  newWords: 0,
  maxGuessedSeries: 0,
  totalWords: 0,
  persent: 0,
};

const miniGameStatistic = (statistics: Statistic[]): GameStatistic => {
  let sumLearnedWords = 0;
  let sumGuessedWords = 0;
  let sumTotalWords = 0;
  let sumNewWords = 0;
  let maxGuessedSeries = 0;
  statistics.forEach((stat) => {
    sumGuessedWords += stat.guessedWords;
    sumLearnedWords += stat.learnedWords;
    sumTotalWords += stat.totalWords;
    sumNewWords += stat.newWords;
    if (maxGuessedSeries < stat.maxGuessedSeries) maxGuessedSeries = stat.maxGuessedSeries;
  });
  const persent = sumGuessedWords !== 0 ? Math.trunc((sumGuessedWords / sumTotalWords) * 100) : 0;
  return {
    guessedWords: sumGuessedWords,
    learnedWords: sumLearnedWords,
    newWords: sumNewWords,
    maxGuessedSeries,
    totalWords: sumTotalWords,
    persent,
  };
};

const parsingStatisticPerDay = (statistics: Statistic[]): SummaryGameStatistic => {
  const audioStatistics: Statistic[] = [];
  const sprintStatistics: Statistic[] = [];
  const dictionaryStatistics: Statistic[] = [];
  statistics.forEach((stat) => {
    // eslint-disable-next-line default-case
    switch (stat.source) {
      case 'audio-challenge':
        audioStatistics.push(stat);
        break;
      case 'sprint':
        sprintStatistics.push(stat);
        break;
      case 'dictionary':
        dictionaryStatistics.push(stat);
        break;
    }
  });
  return {
    sprint: miniGameStatistic(sprintStatistics),
    audioChallenge: miniGameStatistic(audioStatistics),
    dictionary: miniGameStatistic(dictionaryStatistics),
  };
};

export const getChart = (statistics: Statistic[]): StatisticForChar[] => {
  const last10Day = get10LastDays();
  const statPerDayCommon = last10Day.map((date) =>
    statistics.filter((stat) => date === dateToYYYYMMDD(stat.date))
  );
  // const allNewWord = statistics.reduce((sum, stat) => sum + stat.newWords, 0);
  let allLearnedWord = statistics.reduce((sum, stat) => sum + stat.learnedWords, 0);
  const statPerDay = statPerDayCommon
    .map((stat) => {
      const newWords = stat.reduce((sum, el) => sum + el.newWords, 0);
      const learnedWord = stat.reduce((sum, el) => sum + el.learnedWords, 0);
      return { newWords, learnedWord };
    })
    .reverse();
  const chartData: StatisticForChar[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < statPerDay.length; i++) {
    if (i !== 0) {
      allLearnedWord -= statPerDay[i - 1].learnedWord;
      // allNewWord -= statPerDay[i - 1].newWords;
    }
    chartData.push({ newWords: statPerDay[i].newWords, learnedWords: allLearnedWord });
  }
  return chartData.reverse();
};

export default parsingStatisticPerDay;
