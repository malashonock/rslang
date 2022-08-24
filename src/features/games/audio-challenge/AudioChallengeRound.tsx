import getWords from '../../../api/words';
import Word from '../../../model/Word';
import AudioChallengeTurn from './AudioChallengeTurn';

const AudioChallengeRound = (): JSX.Element => {
  const allWords: Word[] = getWords();
  const correctWords = structuredClone(allWords) as Word[];

  const correctWord = correctWords[Math.round(Math.random() * 10)];
  const incorrectWords = Array(4)
    .fill(undefined)
    .map(() => Math.round(Math.random() * (allWords.length - 1)))
    .map((randomIndex: number) => {
      return allWords.filter((word) => word.id !== correctWord.id)[randomIndex];
    });

  return <AudioChallengeTurn correctWord={correctWord} incorrectWords={incorrectWords} />;
};

export default AudioChallengeRound;
