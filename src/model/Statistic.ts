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
  gameDate: Date;
  source: GameName;
  learnedWords: number;
  newWords: number;
  guessedWords: number;
  totalWords: number;
  maxGuessedSeries: number;
  persent?: number;
}

export type GameStatistic = Omit<Statistic, 'userId' | 'gameDate' | 'source'>;

export interface SummaryGameStatistic {
  sprint: GameStatistic;
  audioChallenge: GameStatistic;
  dictionary: GameStatistic;
}
