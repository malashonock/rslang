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
  countNewWords: number;
  countGuessedWords: number;
  countMovesInGames: number;
  bestGuessedSeries: number;
}
