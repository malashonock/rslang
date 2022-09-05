import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWords } from '../../../api/words';
import WordCard from '../word-card/WordCard';
import Word from '../../../model/Word';
import { UserWord } from '../../../model/UserWord';
import styles from './ChapterPageLayout.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { getUserWords } from '../../../api/userWords';

const ChapterPageLayout = () => {
  const { authorizeStatus, id } = useAppSelector((state) => state.authorization);
  const { chapter, page } = useParams();
  const [displayedWords, updateDisplayedWords] = useState<Array<Word & UserWord> | Array<Word>>([]);

  useEffect(() => {
    const loadWords = async () => {
      if (chapter && page) {
        const newWords = await getWords(+chapter - 1, +page - 1);

        if (authorizeStatus) {
          const userWords = await getUserWords(id);
          const updatingNewWords = newWords.map((word) => {
            const isActiveWord = userWords.find((userWord) => userWord.wordId === word.id);
            if (isActiveWord) return { ...word, ...userWords };

            const inactiveWordOptions = {
              wasPlayed: false,
              correctGuessCount: 0,
              wrongGuessCount: 0,
              isDifficult: false,
              isLearned: false,
            };

            return { ...word, ...inactiveWordOptions };
          });
          updateDisplayedWords(updatingNewWords);
        } else {
          updateDisplayedWords(newWords);
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadWords();
  }, [authorizeStatus, chapter, id, page]);

  return (
    <div className={styles.cards}>
      {displayedWords.map((word) => (
        <WordCard key={word.id} word={word} isAuthorized isLearned={false} isDifficult={false} />
      ))}
    </div>
  );
};

export default ChapterPageLayout;
