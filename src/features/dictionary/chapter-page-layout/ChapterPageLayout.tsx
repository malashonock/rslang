import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWords } from '../../../api/words';
import WordCard from '../word-card/WordCard';
import Word from '../../../model/Word';
import { UserWord } from '../../../model/UserWord';
import styles from './ChapterPageLayout.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { getUserWords } from '../../../api/userWords';

type UserWordInDictionary = Word & UserWord;

const ChapterPageLayout = () => {
  const { authorizeStatus, id } = useAppSelector((state) => state.authorization);
  const { chapter, page } = useParams();
  const [displayedWords, updateDisplayedWords] = useState<
    Array<UserWordInDictionary> | Array<Word>
  >([]);

  useEffect(() => {
    const loadWords = async () => {
      if (chapter && page) {
        const dictionaryWords = await getWords(+chapter - 1, +page - 1);

        if (authorizeStatus) {
          const userWords = await getUserWords(id);
          const userWordsInDictionary = dictionaryWords.map((word) => {
            const activeWord = userWords.find((userWord) => userWord.wordId === word.id);

            const defaultWordParameters = {
              wasPlayed: false,
              correctGuessCount: 0,
              wrongGuessCount: 0,
              isDifficult: false,
              isLearned: false,
            };
            if (activeWord) return { ...activeWord, ...word };
            return { ...defaultWordParameters, ...word };
          });

          updateDisplayedWords(userWordsInDictionary);
        } else {
          updateDisplayedWords(dictionaryWords);
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadWords();
  }, [authorizeStatus, chapter, id, page]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function instanceOfUserWordInDictionary(object: any): object is UserWordInDictionary {
    return 'isLearned' in object;
  }

  return (
    <div className={styles.cards}>
      {displayedWords.map((word) => {
        if (instanceOfUserWordInDictionary(word)) {
          return (
            <WordCard
              key={word.id}
              word={word}
              isAuthorized
              isLearned={word.isLearned}
              isDifficult={word.isDifficult}
            />
          );
        }
        return <WordCard key={word.id} word={word} isAuthorized={false} />;
      })}
    </div>
  );
};

export default ChapterPageLayout;
