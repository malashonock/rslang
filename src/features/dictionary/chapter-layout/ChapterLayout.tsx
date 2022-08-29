import { Outlet } from 'react-router-dom';
import styles from './ChapterLayout.module.scss';

const ChapterLayout = () => {
  return (
    <>
      <p className={styles.switchChapterPages}>buttons to switch chapter pages</p>
      <div className={styles.wordCardsWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default ChapterLayout;
