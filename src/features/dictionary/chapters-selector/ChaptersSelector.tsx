import { Stack, Button } from 'react-bootstrap';
import styles from './ChaptersSelector.module.scss';

const currentGroup = 0;

const createButtons = (): JSX.Element[] => {
  const data = [
    { name: 'Chapter 1', colorClass: 'violetButton' },
    { name: 'Chapter 2', colorClass: 'blueButton' },
    { name: 'Chapter 3', colorClass: 'lightBlueButton' },
    { name: 'Chapter 4', colorClass: 'greenButton' },
    { name: 'Chapter 5', colorClass: 'yellowButton' },
    { name: 'Chapter 6', colorClass: 'orangeButton' },
    { name: 'Chapter 7', colorClass: 'redButton' },
  ];

  const items = data.map((item, index) => {
    const currentButtonClass = currentGroup === index ? `${item.colorClass}--current` : '';

    return (
      <Button
        className={`${styles.button} ${styles[item.colorClass]} ${styles[currentButtonClass]}`}
        size="sm"
      >
        {item.name}
      </Button>
    );
  });

  return items;
};

const ChaptersSelector = (): JSX.Element => (
  <Stack className={styles.section} gap={3}>
    <p className={styles.title}>Chapters</p>
    {createButtons()}
  </Stack>
);

export default ChaptersSelector;
