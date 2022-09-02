type GameName = 'audio-challenge' | 'sprint';

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
  guessedWords: number;
  totalWords: number;
  maxGuessedSeries: number;
}
