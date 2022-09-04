export type GameName = 'audio-challenge' | 'sprint' | 'dictionary';

export interface UserWord {
  userId: string;
  wordId: string;
  isWasMiniGame: boolean;
  wordProgress: number;
  isHard: boolean;
  isStudy: boolean;
}

export interface Statistic {
  userId: string;
  date: Date;
  source: GameName;
  learnedWords: number;
  newWords: number;
  guessedWords: number;
  totalWords: number;
  maxGuessedSeries: number;
  persent?: number;
}

export type GameStatistic = Omit<Statistic, 'userId' | 'date' | 'source'>;

export interface SummaryGameStatistic {
  sprint: GameStatistic;
  audioChallenge: GameStatistic;
  dictionary: GameStatistic;
}
export type StatisticForChar = Pick<Statistic, 'newWords' | 'learnedWords'>;
