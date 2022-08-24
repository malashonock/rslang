import { useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import API_BASE_URL from '../../../api/constants';
import Word from '../../../model/Word';
import shuffle from '../../../utils/array';
import SoundButton from '../../shared/sound-button/SoundButton';
import GuessWordButton from './guess-word-button/GuessWordButton';
import NextTurnButton from './NextTurnButton';

interface AudioChallengeTurnProps {
  correctWord: Word;
  incorrectWords: Word[];
}

const AudioChallengeTurn = ({
  correctWord,
  incorrectWords,
}: AudioChallengeTurnProps): JSX.Element => {
  const correctWordSoundSrc = `${API_BASE_URL}/${correctWord.audio}`;

  const allWords = useMemo((): Word[] => {
    return shuffle<Word>([correctWord, ...incorrectWords]);
  }, [correctWord, incorrectWords]);

  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const handleSelect = (word: string): void => {
    setSelectedWord(word);
  };

  return (
    <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center gap-5">
      <div className="correct-word">
        <SoundButton soundSrc={correctWordSoundSrc} diameter="7rem" variant="warning" />
      </div>
      <div className="incorrect-words d-flex gap-3">
        {allWords.map(({ word }) => (
          <GuessWordButton
            word={word}
            isCorrect={word === correctWord.word}
            disabled={!!selectedWord}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <NextTurnButton isWordSelected={!!selectedWord} />
    </Container>
  );
};

export default AudioChallengeTurn;
