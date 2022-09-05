export interface NewUserWord {
  wasPlayed: boolean;
  correctGuessCount: number;
  wrongGuessCount: number;
  isDifficult: boolean;
  isLearned: boolean;
  optional?: {
    [index: string]: unknown;
  };
}

export interface UserWord extends NewUserWord {
  id: string;
  wordId: string;
}

export interface UpdatedUserWord {
  wasPlayed?: boolean;
  correctGuessCount?: number;
  wrongGuessCount?: number;
  isDifficult?: boolean;
  isLearned?: boolean;
  optional?: {
    [index: string]: unknown;
  };
}
