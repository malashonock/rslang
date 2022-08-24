import { useMemo, useState } from 'react';
import { CloseButton, Container } from 'react-bootstrap';
import API_BASE_URL from '../../../api/constants';
import Word from '../../../model/Word';
import shuffle from '../../../utils/array';
import SoundButton from '../../shared/sound-button/SoundButton';
import WordPicture from '../../shared/word-picture/WordPicture';
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
  const correctWordImageSrc = `${API_BASE_URL}/${correctWord.image}`;

  const allWords = useMemo((): Word[] => {
    return shuffle<Word>([correctWord, ...incorrectWords]);
  }, [correctWord, incorrectWords]);

  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const handleSelect = (word: string): void => {
    setSelectedWord(word);
  };

  return (
    <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center gap-5 position-relative">
      <CloseButton className="position-absolute top-0 end-0 m-2" />
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
