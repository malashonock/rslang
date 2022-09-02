import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import styles from './ChapterLayout.module.scss';
import ChapterPagesSelector from '../chapter-pages-selector/ChapterPagesSelector';

const ChapterLayout = () => {
  const isLeanedCurrentPage = useSelector((state: RootState) => state.dictionary.value);

  return (
    <>
      <ChapterPagesSelector
        className={`${styles.switchChapterPages} ${isLeanedCurrentPage ? styles.learnedPage : ''}`}
        isLeanedCurrentPage={isLeanedCurrentPage}
      />
      <div className={styles.wordCardsWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default ChapterLayout;
