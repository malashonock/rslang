import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWords } from '../../../api/words';
import WordCard from '../word-card/WordCard';

const ChapterPageLayout = () => {
  const { chapter, page } = useParams();
  const [wordCards, updateWordCards] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const loadWords = async () => {
      if (chapter && page) {
        const words = await getWords(+chapter - 1, +page - 1);
        const cards = words.map((word) => <WordCard word={word} isAuthorized={false} />);
        updateWordCards(cards);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadWords();
  });

  return <div>{wordCards}</div>;
};

export default ChapterPageLayout;
