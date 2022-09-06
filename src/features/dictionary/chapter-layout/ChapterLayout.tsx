import { Outlet } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import styles from './ChapterLayout.module.scss';
import ChapterPagesSelector from '../chapter-pages-selector/ChapterPagesSelector';
import GamesLinks from '../games-links/GamesLinks';

const ChapterLayout = () => {
  return (
    <>
      <Stack className={styles.switchChapterPages} gap={2}>
        <ChapterPagesSelector />
        <GamesLinks />
      </Stack>
      <div className={styles.wordCardsWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default ChapterLayout;
