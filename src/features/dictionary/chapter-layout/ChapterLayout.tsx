import { Outlet, useParams } from 'react-router-dom';
import styles from './ChapterLayout.module.scss';
import ChapterPagesSelector from '../chapter-pages-selector/ChapterPagesSelector';

const ChapterLayout = () => {
  const { chapter } = useParams();

  return (
    <>
      <ChapterPagesSelector
        className={styles.switchChapterPages}
        pageCount={chapter === '7' ? 1 : 30}
      />
      <div className={styles.wordCardsWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default ChapterLayout;
