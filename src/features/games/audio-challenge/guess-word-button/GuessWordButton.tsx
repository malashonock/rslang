import { ChangeEvent, useState } from 'react';
import { ToggleButton } from 'react-bootstrap';
import { ReactComponent as CheckIcon } from '../../../../assets/icons/check-icon.svg';
import { ReactComponent as XIcon } from '../../../../assets/icons/x-icon.svg';
import styles from './GuessWordButton.module.scss';

interface GuessWordButtonProps {
  word: string;
  isCorrect: boolean;
  disabled: boolean;
  onSelect: (word: string) => void;
}

const GuessWordButton = ({
  word,
  isCorrect,
  disabled,
  onSelect,
}: GuessWordButtonProps): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const handleSelect = (event: ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.currentTarget.checked);
    onSelect(word);
  };

  return (
    <ToggleButton
      id={word}
      className="d-flex gap-1"
      variant={checked ? (isCorrect ? 'success' : 'danger') : 'outline-primary'}
      type="checkbox"
      checked={checked}
      value="1"
      onChange={handleSelect}
      disabled={disabled}
    >
      <span>
        {checked &&
          (isCorrect ? <CheckIcon className={styles.icon} /> : <XIcon className={styles.icon} />)}
      </span>
      {word}
    </ToggleButton>
  );
};

export default GuessWordButton;
