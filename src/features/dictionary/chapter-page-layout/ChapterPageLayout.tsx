import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageStatus } from '../dictionarySlice';
import { getWords } from '../../../api/words';
import WordCard from '../word-card/WordCard';
import Word from '../../../model/Word';
import styles from './ChapterPageLayout.module.scss';

const isAuthorized = () => {
  return true;
};

const isAllWordsOnPageLearned = (page: string) => {
  return !!(+page % 2);
};

const ChapterPageLayout = () => {
  const authorizationStatus = isAuthorized();
  const { chapter, page } = useParams();
  const [displayedWords, updateDisplayedWords] = useState<Word[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadWords = async () => {
      if (chapter && page) {
        const newWords = await getWords(+chapter - 1, +page - 1);
        if (authorizationStatus) {
          const isAllWordsLearned = isAllWordsOnPageLearned(page);
          dispatch(setPageStatus(isAllWordsLearned));
        }
        updateDisplayedWords(newWords);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadWords();
  }, [authorizationStatus, chapter, dispatch, page]);

  return (
    <div className={styles.cards}>
      {displayedWords.map((word) => (
        <WordCard key={word.id} word={word} isAuthorized={authorizationStatus} />
      ))}
    </div>
  );
};

export default ChapterPageLayout;
