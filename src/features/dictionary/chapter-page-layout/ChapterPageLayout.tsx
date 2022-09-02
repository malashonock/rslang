import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageStatus } from '../dictionarySlice';
import { getWords } from '../../../api/words';
import WordCard from '../word-card/WordCard';
import Word from '../../../model/Word';
import styles from './ChapterPageLayout.module.scss';
import { useAppSelector } from '../../../store/hooks';

const isAllWordsOnPageLearned = (page: string) => {
  return !!(+page % 2);
};

const ChapterPageLayout = () => {
  const { authorizeStatus } = useAppSelector((state) => state.authorization);
  const { chapter, page } = useParams();
  const [displayedWords, updateDisplayedWords] = useState<Word[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadWords = async () => {
      if (chapter && page) {
        const newWords = await getWords(+chapter - 1, +page - 1);
        updateDisplayedWords(newWords);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadWords();
  }, [chapter, page]);

  useEffect(() => {
    if (authorizeStatus && page) {
      const isAllWordsLearned = isAllWordsOnPageLearned(page);
      dispatch(setPageStatus(isAllWordsLearned));
    }
  }, [authorizeStatus, dispatch, page]);

  return (
    <div className={styles.cards}>
      {displayedWords.map((word) => (
        <WordCard key={word.id} word={word} isAuthorized={authorizeStatus} />
      ))}
    </div>
  );
};

export default ChapterPageLayout;
