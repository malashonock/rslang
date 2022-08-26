import { useState } from 'react';
import { Stack, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './ChaptersSelector.module.scss';

const ChaptersSelector = (): JSX.Element => {
  const data = [
    { name: 'Chapter 1', colorClass: 'violetButton', path: 'chapter1' },
    { name: 'Chapter 2', colorClass: 'blueButton', path: 'chapter2' },
    { name: 'Chapter 3', colorClass: 'lightBlueButton', path: 'chapter3' },
    { name: 'Chapter 4', colorClass: 'greenButton', path: 'chapter4' },
    { name: 'Chapter 5', colorClass: 'yellowButton', path: 'chapter5' },
    { name: 'Chapter 6', colorClass: 'orangeButton', path: 'chapter6' },
    { name: 'Chapter 7', colorClass: 'redButton', path: 'chapter7' },
  ];

  const [currentButton, updateCurrentButton] = useState(0);

  return (
    <Stack className={styles.section} gap={3}>
      <p className={styles.title}>Chapters</p>

      {data.map((item, index) => {
        const currentButtonClass = currentButton === index + 1 ? `${item.colorClass}--current` : '';

        return (
          <LinkContainer to={item.path} key={item.name}>
            <Button
              className={`${styles.button} ${styles[item.colorClass]} 
              ${styles[currentButtonClass]}`}
              size="sm"
              onClick={() => updateCurrentButton(index + 1)}
            >
              {item.name}
            </Button>
          </LinkContainer>
        );
      })}
    </Stack>
  );
};

export default ChaptersSelector;
