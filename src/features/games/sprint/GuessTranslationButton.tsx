import { Button } from 'react-bootstrap';
import dingSound from '../../../assets/sounds/ding.mp3';
import buzzerSound from '../../../assets/sounds/buzzer.mp3';
import playAudioAsync from '../../../utils/sound';

interface GuessTranslationButtonProps {
  variant: 'correct' | 'incorrect';
  isCorrect: boolean;
  onSelect: (isCorrect: boolean) => void;
}

const GuessTranslationButton = ({
  variant,
  isCorrect,
  onSelect,
}: GuessTranslationButtonProps): JSX.Element => {
  const handleClick = (): void => {
    const sound = new Audio(isCorrect ? dingSound : buzzerSound);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    playAudioAsync(sound);

    onSelect(isCorrect);
  };

  return (
    <Button variant={variant === 'correct' ? 'success' : 'danger'} onClick={handleClick}>
      {variant === 'correct' ? 'Correct →' : '← Incorrect'}
    </Button>
  );
};

export default GuessTranslationButton;
