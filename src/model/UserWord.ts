export default interface UserWord {
  wasPlayed: boolean;
  correctGuessCount: number;
  wrongGuessCount: number;
  isDifficult: boolean;
  isLearned: boolean;
  optional: {
    [index: string]: unknown;
  };
}
