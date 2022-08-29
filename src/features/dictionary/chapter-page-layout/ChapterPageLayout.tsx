import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWords } from '../../../api/words';
import WordCard from '../word-card/WordCard';
import Word from '../../../model/Word';

const ChapterPageLayout = () => {
  const { chapter, page } = useParams();
  const [displayedWords, updateDisplayedWords] = useState<Word[]>([]);

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

  return (
    <div>
      {displayedWords.map((word) => (
        <WordCard key={word.id} word={word} isAuthorized />
      ))}
    </div>
  );
};

export default ChapterPageLayout;
