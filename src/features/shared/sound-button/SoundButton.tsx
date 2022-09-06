import { CSSProperties, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import playAudioAsync from '../../../utils/sound';
import styles from './SoundButton.module.scss';
import { ReactComponent as PlaySoundIcon } from '../../../assets/icons/play-sound.svg';
import { ReactComponent as StopSoundIcon } from '../../../assets/icons/stop-sound.svg';

interface SoundButtonProps {
  soundSrc: string | string[];
  diameter?: string;
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'info';
}

const SoundButton = ({
  soundSrc,
  diameter = '2rem',
  variant = 'primary',
}: SoundButtonProps): JSX.Element => {
  const [played, setPlayedState] = useState(false);
  const sound = useRef<HTMLAudioElement>();

  const play = async () => {
    if (!played) {
      setPlayedState(true);
      if (typeof soundSrc === 'string') {
        sound.current = new Audio(soundSrc);
        await playAudioAsync(sound.current);
      } else {
        // eslint-disable-next-line no-restricted-syntax
        for (const i of soundSrc) {
          sound.current = new Audio(i);
          // eslint-disable-next-line no-await-in-loop
          await playAudioAsync(sound.current);
        }
      }
      setPlayedState(false);
    } else {
      setPlayedState(false);
      if (sound.current) {
        sound.current.currentTime = 0;
        sound.current.pause();
      }
    }
  };

  return (
    <Button
      style={{ '--diameter': diameter } as CSSProperties}
      onClick={play}
      className={`${styles.soundButton} btn btn-${variant} rounded-circle`}
    >
      {played ? (
        <StopSoundIcon className={styles.soundIcon} />
      ) : (
        <PlaySoundIcon className={styles.soundIcon} />
      )}
    </Button>
  );
};

export default SoundButton;
