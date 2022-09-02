import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from './ChapterLayout.module.scss';
import ChapterPagesSelector from '../chapter-pages-selector/ChapterPagesSelector';

const ChapterLayout = () => {
  const { isCurrentChapterPageLearned } = useSelector((state: RootState) => state.dictionary);

  return (
    <>
      <ChapterPagesSelector
        className={`${styles.switchChapterPages} ${
          isCurrentChapterPageLearned ? styles.learnedPage : ''
        }`}
        isLeanedCurrentPage={isCurrentChapterPageLearned}
      />
      <div className={styles.wordCardsWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default ChapterLayout;
