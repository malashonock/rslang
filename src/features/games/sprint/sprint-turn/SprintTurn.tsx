import { Card, CloseButton, Container, Stack } from 'react-bootstrap';
import API_BASE_URL from '../../../../api/constants';
import Word from '../../../../model/Word';
import SoundButton from '../../../shared/sound-button/SoundButton';
import GuessTranslationButton from '../GuessTranslationButton';
import LevelIndicator from '../level-indicator/LevelIndicator';
import { LevelRules } from '../SprintRound';
import WordsProgress from '../words-progress/WordsProgress';
import styles from './SprintTurn.module.scss';

interface SprintTurnProps {
  correctWord: Word;
  translation: string;
  onAnswer: (isCorrect: boolean) => void;
  onQuit: () => void;
  levelRules: LevelRules;
  winsSinceLevelStart: number;
}

const SprintTurn = ({
  correctWord,
  translation,
  onAnswer,
  onQuit,
  levelRules,
  winsSinceLevelStart,
}: SprintTurnProps): JSX.Element => {
  const correctWordSoundSrc = `${API_BASE_URL}/${correctWord.audio}`;

  const handleSelect = (isCorrect: boolean): void => {
    onAnswer(isCorrect);
  };

  const handleQuit = (): void => {
    onQuit();
  };

  return (
    <Container className="flex-grow-1 d-flex flex-column justify-content-center align-items-center gap-5 position-relative">
      <CloseButton className="position-absolute top-0 end-0 m-3" onClick={handleQuit} />
      <Card>
        <Card.Body className={styles.sprintCard}>
          <Stack gap={4}>
            <WordsProgress levelRules={levelRules} winsSinceLevelStart={winsSinceLevelStart} />
            <LevelIndicator />
            <div className="d-flex flex-column align-items-center gap-2">
              <div className="d-flex align-items-center gap-2">
                <SoundButton soundSrc={correctWordSoundSrc} diameter="2rem" variant="warning" />
                <span className="fs-5">{correctWord.word}</span>
              </div>
              <div className="fs-5 fw-semibold">{translation}?</div>
            </div>
            <div className="d-flex gap-2">
              <GuessTranslationButton
                variant="incorrect"
                isCorrect={correctWord.wordTranslate !== translation}
                onSelect={handleSelect}
              />
              <GuessTranslationButton
                variant="correct"
                isCorrect={correctWord.wordTranslate === translation}
                onSelect={handleSelect}
              />
            </div>
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SprintTurn;
