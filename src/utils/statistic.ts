import { Statistic, GameStatistic, SummaryGameStatistic } from '../model/Statistic';

export const INITIAL_VALUES_GAME_STATISTICS: GameStatistic = {
  learnedWords: 0,
  guessedWords: 0,
  maxGuessedSeries: 0,
  totalWords: 0,
  persent: 0,
};

const miniGameStatistic = (statistics: Statistic[]): GameStatistic => {
  let sumLearnedWords = 0;
  let sumGuessedWords = 0;
  let sumTotalWords = 0;
  let maxGuessedSeries = 0;
  statistics.forEach((stat) => {
    sumGuessedWords += stat.guessedWords;
    sumLearnedWords += stat.learnedWords;
    sumTotalWords += stat.totalWords;
    if (maxGuessedSeries < stat.maxGuessedSeries) maxGuessedSeries = stat.maxGuessedSeries;
  });
  const persent = Math.trunc((sumGuessedWords / sumTotalWords) * 100);
  return {
    guessedWords: sumGuessedWords,
    learnedWords: sumLearnedWords,
    maxGuessedSeries,
    totalWords: sumTotalWords,
    persent,
  };
};

const parsingStatisticPerDay = (statistics: Statistic[]): SummaryGameStatistic => {
  const audioStatistics: Statistic[] = [];
  const sprintStatistics: Statistic[] = [];
  statistics.forEach((stat) => {
    if (stat.gameType === 'sprint') sprintStatistics.push(stat);
    else audioStatistics.push(stat);
  });
  return {
    sprint: miniGameStatistic(sprintStatistics),
    audioChallenge: miniGameStatistic(audioStatistics),
  };
};

export default parsingStatisticPerDay;
