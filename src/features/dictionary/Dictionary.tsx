import WordCard from './word-card/WordCard';

const word = {
  id: '22',
  word: 'capital',
  transcription: '[kæpətl]',
  wordTranslate: 'столица',
  textMeaning: 'A capital is a city where a country’s government is based.',
  textMeaningTranslate: 'Столица - это город, в котором базируется правительство страны.',
  textExample: 'The capital of the United States is Washington, D.C.',
  textExampleTranslate: 'Столица Соединенных Штатов - Вашингтон, округ Колумбия',
};

const Dictionary = (): JSX.Element => {
  return (
    <>
      <h2>Dictionary</h2>
      <WordCard word={word} isAuthorized />
    </>
  );
};

export default Dictionary;
