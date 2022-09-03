export default interface UserWord {
  id: string;
  wasPlayed: boolean;
  correctGuessCount: number;
  wrongGuessCount: number;
  isDifficult: boolean;
  isLearned: boolean;
  optional: {
    [index: string]: unknown;
  };
}
