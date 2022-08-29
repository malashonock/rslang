import WordCard from './word-card/WordCard';
import ChaptersSelector from './chapters-selector/ChaptersSelector';

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
    <>
      <h2>Dictionary</h2>
      <WordCard word={word} isAuthorized />
      <ChaptersSelector />
    </>
  );
};

export default Dictionary;
