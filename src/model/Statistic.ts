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
  gameType: GameName;
  learnedWords: number;
  newWords: number;
  guessedWords: number;
  totalWords: number;
  maxGuessedSeries: number;
  persent?: number;
}

export type GameStatistic = Omit<Statistic, 'userId' | 'gameDate' | 'gameType'>;

export interface SummaryGameStatistic {
  sprint: GameStatistic;
  audioChallenge: GameStatistic;
  dictionary: GameStatistic;
}
