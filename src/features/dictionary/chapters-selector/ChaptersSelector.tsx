import { Stack, Button } from 'react-bootstrap';
import styles from './ChaptersSelector.module.scss';

const currentGroup = 0;

const createButtons = (): JSX.Element[] => {
  const data = [
    { number: 1, variant: 'info' },
    { number: 2, variant: 'primary' },
    { number: 3, variant: 'secondary' },
    { number: 4, variant: 'success' },
    { number: 5, variant: 'warning' },
    { number: 6, variant: 'danger' },
    { number: 7, variant: 'dark' },
  ];

  const items = data.map((item) => {
    const color = currentGroup + 1 === item.number ? item.variant : `outline-${item.variant}`;
    const currentButtonClass = currentGroup + 1 === item.number ? styles.currentButton : '';

    return (
      <Button className={`${styles.button} ${currentButtonClass}`} variant={color} size="sm">
        {item.number}
      </Button>
    );
  });

  return items;
};

const ChaptersSelector = (): JSX.Element => (
  <Stack className={styles.section} gap={3}>
    <p className={styles.title}>Groups</p>
    {createButtons()}
  </Stack>
);

export default ChaptersSelector;
