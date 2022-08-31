import { useEffect, useMemo, useState } from 'react';
import { CloseButton, Container } from 'react-bootstrap';
import API_BASE_URL from '../../../api/constants';
import Word from '../../../model/Word';
import { shuffle } from '../../../utils/array';
import SoundButton from '../../shared/sound-button/SoundButton';
import WordPicture from '../../shared/word-picture/WordPicture';
import GuessWordButton from './guess-word-button/GuessWordButton';
import NextTurnButton from './NextTurnButton';

interface AudioChallengeTurnProps {
  correctWord: Word;
  incorrectWords: Word[];
  turn: number;
  isLastTurn: boolean;
  onNextTurn: (currentTurnResult: boolean) => void;
  onQuit: (currentTurnResult: boolean) => void;
}

const AudioChallengeTurn = ({
  correctWord,
  incorrectWords,
  turn,
  isLastTurn,
  onNextTurn,
  onQuit,
}: AudioChallengeTurnProps): JSX.Element => {
  const correctWordSoundSrc = `${API_BASE_URL}/${correctWord.audio}`;
  const correctWordImageSrc = `${API_BASE_URL}/${correctWord.image}`;

  const allWords = useMemo((): Word[] => {
    return shuffle<Word>([correctWord, ...incorrectWords]);
  }, [correctWord, incorrectWords]);

  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  useEffect(() => {
    setSelectedWord(null);
  }, [turn]);

  const isGuessCorrect = (): boolean => {
    return selectedWord === correctWord.word;
  };

  const handleSelect = (word: string): void => {
    setSelectedWord(word);
  };

  const clearSelection = (): void => {
    setSelectedWord(null);
  };

  const handleNextTurn = (): void => {
    clearSelection();
    onNextTurn(isGuessCorrect());
  };

  const handleQuit = (): void => {
    clearSelection();
    onQuit(isGuessCorrect());
  };

  return (
    <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center gap-5 position-relative">
      <CloseButton className="position-absolute top-0 end-0 m-3" onClick={handleQuit} />
      <div className="correct-word d-flex flex-column align-items-center gap-2">
        <WordPicture
          imageSrc={correctWordImageSrc}
          diameter="7rem"
          className={selectedWord ? '' : 'd-none'}
        />
        <div className="d-flex align-items-center gap-2">
          <SoundButton
            soundSrc={correctWordSoundSrc}
            diameter={selectedWord ? '2rem' : '7rem'}
            variant="warning"
          />
          <span
            className={`fs-5 ${selectedWord ? '' : 'd-none'}`}
          >{`${correctWord.word} ${correctWord.transcription}`}</span>
        </div>
      </div>
      <div className="incorrect-words d-flex gap-3">
        {allWords.map(({ id, word }) => (
          <GuessWordButton
            key={id}
            word={word}
            isCorrect={id === correctWord.id}
            turn={turn}
            disabled={!!selectedWord}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <NextTurnButton
        isWordSelected={!!selectedWord}
        isLastTurn={isLastTurn}
        onClick={handleNextTurn}
      />
    </Container>
  );
};

export default AudioChallengeTurn;
