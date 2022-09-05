import { Outlet } from 'react-router-dom';
import styles from './ChapterLayout.module.scss';
import ChapterPagesSelector from '../chapter-pages-selector/ChapterPagesSelector';

const ChapterLayout = () => {
  return (
    <>
      <ChapterPagesSelector className={styles.switchChapterPages} />
      <div className={styles.wordCardsWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default ChapterLayout;
