export type GameType = 'audio-challenge' | 'sprint';

export type StatisticsSource = GameType | 'destination';

export type ISODateString = string;

export interface Statistic {
  id: string;
  date: ISODateString;
  source: StatisticsSource;
  newWords: number;
  learnedWords: number;
  guessedWords: number;
  totalWords: number;
  maxGuessedSeries: number;
  optional?: {
    [index: string]: unknown;
  };
}

export type NewStatistic = Omit<Statistic, 'id'>;
