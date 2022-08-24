import { useEffect, useState } from 'react';
import { getWords } from '../../../api/words';
import Word from '../../../model/Word';
import AudioChallengeTurn from './AudioChallengeTurn';

const AudioChallengeRound = (): JSX.Element => {
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [correctWords, setCorrectWords] = useState<Word[]>([]);
  const [correctWord, setCorrectWord] = useState<Word | null>(null);
  const [incorrectWords, setIncorrectWords] = useState<Word[]>([]);

  useEffect(() => {
    const setAllWordsAsync = async () => {
      const words = await getWords(0, 0);
      setAllWords(words);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    setAllWordsAsync();
  }, []);

  useEffect(() => {
    setCorrectWords(structuredClone(allWords) as Word[]);
  }, [allWords]);

  useEffect(() => {
    setCorrectWord(correctWords[Math.round(Math.random() * 10)]);
  }, [correctWords]);

  useEffect(() => {
    setIncorrectWords(
      Array(4)
        .fill(undefined)
        .map(() => Math.floor(Math.random() * (allWords.length - 1)))
        .map((randomIndex: number) => {
          return allWords.filter((word) => word.id !== correctWord?.id)[randomIndex];
        })
    );
  }, [allWords, correctWord?.id]);

  return correctWord ? (
    <AudioChallengeTurn correctWord={correctWord} incorrectWords={incorrectWords} />
  ) : (
    <p className="align-self-center">Loading...</p>
  );
};

export default AudioChallengeRound;
