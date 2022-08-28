import { Route, Routes } from 'react-router-dom';
import DictionaryLayout from './dictionary-layout/DictionaryLayout';
import WordCard from './word-card/WordCard';
import ChapterLayout from './chapter-layout/ChapterLayout';

const word = {
  id: '5e9f5ee35eb9e72bc21af4a7',
  group: 0,
  page: 0,
  word: 'capital',
  image: 'files/01_0008.jpg',
  audio: 'files/01_0008.mp3',
  audioMeaning: 'files/01_0008_meaning.mp3',
  audioExample: 'files/01_0008_example.mp3',
  textMeaning: 'A <i>capital</i> is a city where a country’s government is based.',
  textExample: 'The <b>capital</b> of the United States is Washington, D.C.',
  transcription: '[kæpətl]',
  textExampleTranslate: 'Столица Соединенных Штатов - Вашингтон, округ Колумбия',
  textMeaningTranslate: 'Столица - это город, в котором базируется правительство страны',
  wordTranslate: 'столица',
};

const Dictionary = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<DictionaryLayout />}>
        <Route
          index
          element={
            <h3>
              Select chapter. 1 is the easiest. 6 is the most difficult. 7 - words that you marked
              as difficult
            </h3>
          }
        />
        <Route path="chapters/1" element={<ChapterLayout />}>
          <Route path="pages/1" element={<WordCard word={word} isAuthorized />} />
        </Route>
        <Route path="chapters/2" element={<ChapterLayout />}>
          <Route path="pages/1" element={<WordCard word={word} isAuthorized />} />
        </Route>
        <Route path="chapters/3" element={<ChapterLayout />}>
          <Route path="pages/1" element={<WordCard word={word} isAuthorized />} />
        </Route>
        <Route path="chapters/4" element={<ChapterLayout />}>
          <Route path="pages/1" element={<WordCard word={word} isAuthorized />} />
        </Route>
        <Route path="chapters/5" element={<ChapterLayout />}>
          <Route path="pages/1" element={<WordCard word={word} isAuthorized />} />
        </Route>
        <Route path="chapters/6" element={<ChapterLayout />}>
          <Route path="pages/1" element={<WordCard word={word} isAuthorized />} />
        </Route>
        <Route path="chapters/7" element={<ChapterLayout />}>
          <Route path="pages/1" element={<WordCard word={word} isAuthorized />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Dictionary;
