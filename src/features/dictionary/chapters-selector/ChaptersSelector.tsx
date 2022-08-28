import { useState } from 'react';
import { Stack, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './ChaptersSelector.module.scss';

const ChaptersSelector = (): JSX.Element => {
  const BUTTON_COLOR_CLASSES = [
    { colorClass: 'violetButton' },
    { colorClass: 'blueButton' },
    { colorClass: 'lightBlueButton' },
    { colorClass: 'greenButton' },
    { colorClass: 'yellowButton' },
    { colorClass: 'orangeButton' },
    { colorClass: 'redButton' },
  ];

  const [currentButton, updateCurrentButton] = useState(0);

  return (
    <Stack className={styles.section} gap={3}>
      <p className={styles.title}>Chapters</p>

      {BUTTON_COLOR_CLASSES.map((item, index) => {
        const { colorClass } = item;
        const currentButtonClass = currentButton === index + 1 ? `${colorClass}--current` : '';

        return (
          <LinkContainer to={`chapters/${index + 1}/pages/1`} key={colorClass}>
            <Button
              className={`${styles.button} ${styles[colorClass]} 
              ${styles[currentButtonClass]}`}
              size="sm"
              onClick={() => updateCurrentButton(index + 1)}
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
