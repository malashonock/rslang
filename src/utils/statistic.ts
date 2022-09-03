import { Statistic, GameStatistic, SummaryGameStatistic } from '../model/Statistic';

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
    switch (stat.gameType) {
      case 'audio-challenge': {
        audioStatistics.push(stat);
        break;
      }
      case 'sprint': {
        sprintStatistics.push(stat);
        break;
      }
      case 'dictionary': {
        dictionaryStatistics.push(stat);
        break;
      }
    }
  });
  return {
    sprint: miniGameStatistic(sprintStatistics),
    audioChallenge: miniGameStatistic(audioStatistics),
    dictionary: miniGameStatistic(dictionaryStatistics),
  };
};

export default parsingStatisticPerDay;
