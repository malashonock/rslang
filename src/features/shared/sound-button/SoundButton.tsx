import { CSSProperties, useState } from 'react';
import { Button } from 'react-bootstrap';
import playAudioAsync from '../../../utils/sound';
import styles from './SoundButton.module.scss';
import { ReactComponent as SoundIcon } from '../../../assets/icons/sound.svg';

interface SoundButtonProps {
  soundSrc: string;
  diameter?: string;
  variant?: 'primary' | 'warning' | 'danger' | 'info';
}

const SoundButton = ({
  soundSrc,
  diameter = '2rem',
  variant = 'primary',
}: SoundButtonProps): JSX.Element => {
  const [disabled, setDisabled] = useState(false);

  const play = async () => {
    setDisabled(true);
    const sound = new Audio(soundSrc);
    await playAudioAsync(sound);
    setDisabled(false);
  };

  return (
    <Button
      style={{ '--diameter': diameter } as CSSProperties}
      onClick={play}
      disabled={disabled}
      className={`${styles.soundButton} btn btn-${variant} rounded-circle`}
    >
      <SoundIcon className={styles.soundIcon} />
    </Button>
  );
};

export default SoundButton;
