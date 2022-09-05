import { useParams } from 'react-router-dom';
import { Stack, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './ChaptersSelector.module.scss';

type ChaptersSelectorProps = {
  className?: string;
};

const ChaptersSelector = ({ className }: ChaptersSelectorProps): JSX.Element => {
  const BUTTON_COLOR_CLASSES = [
    { colorClass: 'violetButton' },
    { colorClass: 'blueButton' },
    { colorClass: 'lightBlueButton' },
    { colorClass: 'greenButton' },
    { colorClass: 'yellowButton' },
    { colorClass: 'orangeButton' },
    { colorClass: 'redButton' },
  ];

  const { chapter } = useParams();
  const currentButtonIndex = chapter ? +chapter : 0;

  return (
    <Stack className={`${styles.section} ${className || ''}`} gap={3}>
      <p className={styles.title}>Chapters</p>

      {BUTTON_COLOR_CLASSES.map((item, index) => {
        const { colorClass } = item;
        const currentButtonClass = currentButtonIndex === index + 1 ? `${colorClass}--current` : '';

        return (
          <LinkContainer to={`chapters/${index + 1}/pages/1`} key={colorClass}>
            <Button
              className={`${styles.button} ${styles[colorClass]} 
              ${styles[currentButtonClass]}`}
              size="sm"
            >
              {`Chapter ${index + 1}`}
            </Button>
          </LinkContainer>
        );
      })}
    </Stack>
  );
};

export default ChaptersSelector;
