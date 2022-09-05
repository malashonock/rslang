/* eslint-disable consistent-return */
import { useEffect, useMemo, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { getWords } from '../../../api/words';
import { AuthState } from '../../../model/AuthState';
import GameTurnResult from '../../../model/GameTurnResult';
import Word from '../../../model/Word';
import { useAppSelector } from '../../../store/hooks';
import { RootState } from '../../../store/store';
import DifficultyLevelSelector from '../shared/difficulty-level-selector/DifficultyLevelSelector';
import GameResult from '../shared/GameResult';
import saveGameResults from '../shared/saveGameResults';
import AudioChallengeTurn from './AudioChallengeTurn';

const AudioChallengeRound = (): JSX.Element => {
  const { id: userId, authorizeStatus } = useAppSelector(
    (state: RootState): AuthState => state.authorization
  );

  const [searchParams] = useSearchParams();

  const chapter = useMemo(() => {
    const chapterStr = searchParams.get('group');
    return chapterStr ? Number(chapterStr) : undefined;
  }, [searchParams]);

  const page = useMemo(() => {
    const pageStr = searchParams.get('page');
    return pageStr ? Number(pageStr) : undefined;
  }, [searchParams]);

  const [availableWords, setAvailableWords] = useState<Word[]>([]);
  const [correctWords, setCorrectWords] = useState<Word[]>([]);
  const [correctWord, setCorrectWord] = useState<Word | null>(null);

  const TURNS_COUNT = 20;
  const WORDS_PER_TURN = 5;

  const [turn, setTurn] = useState(1);
  const [gameResult, setGameResult] = useState<GameTurnResult[]>([]);
  const [score, setScore] = useState(0);
  const [ready, setReady] = useState(false);
  const [finish, setFinish] = useState(false);

  // Initialize available words
  useEffect(() => {
    const loadWords = async () => {
      const words = await getWords(chapter, page);
      setAvailableWords([...words]);
      setCorrectWords([...words]);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadWords();
  }, [chapter, page]);

  // Set new correct word
  useEffect(() => {
    if (correctWords.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * correctWords.length);
    setCorrectWord(correctWords[randomIndex]);
  }, [correctWords]);

  const updateCorrectWords = () => {
    setCorrectWords(correctWords.filter(({ id }) => id !== correctWord?.id));
  };

  const incorrectWords = useMemo((): Word[] => {
    const source = availableWords.filter((word) => word.id !== correctWord?.id);
    const selection: Word[] = [];

    for (let i = 1; i < WORDS_PER_TURN; i += 1) {
      const randomIndex = Math.floor(Math.random() * (source.length - 1));
      selection.push(source[randomIndex]);
      source.splice(randomIndex, 1);
    }

    return selection;
  }, [availableWords, correctWord?.id]);

  const isLastTurn = (): boolean => {
    return turn === TURNS_COUNT;
  };

  const updateGameResult = (isCorrect: boolean): void => {
    const turnResult: GameTurnResult = {
      word: correctWord as Word,
      wasGuessed: isCorrect,
    };

    setGameResult([...gameResult, turnResult]);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextTurn = (isCorrect: boolean): void => {
    updateGameResult(isCorrect);

    if (turn < TURNS_COUNT) {
      setTurn(turn + 1);
      updateCorrectWords();
    } else {
      setFinish(true);
    }
  };

  const handleQuit = (isCorrect: boolean): void => {
    updateGameResult(isCorrect);
    setFinish(true);
  };

  const renderDifficultySelector = (): JSX.Element | undefined => {
    if (!ready) {
      return <DifficultyLevelSelector show={!ready} onHide={() => setReady(true)} />;
    }
  };

  useEffect(() => {
    if (finish && userId && authorizeStatus === true) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      saveGameResults(userId, new Date(), 'audio-challenge', gameResult);
    }
  }, [authorizeStatus, finish, gameResult, userId]);

  const renderGameResult = (): JSX.Element | undefined => {
    if (finish) {
      if (finish) {
        return <GameResult score={score} gameResult={gameResult} />;
      }
    }
  };

  const renderGameRound = (): JSX.Element | undefined => {
    if (ready && correctWord && !finish) {
      return (
        <AudioChallengeTurn
          correctWord={correctWord}
          incorrectWords={incorrectWords}
          turn={turn}
          isLastTurn={isLastTurn()}
          onNextTurn={handleNextTurn}
          onQuit={handleQuit}
        />
      );
    }
  };

  const renderLoadingSpinner = (): JSX.Element | undefined => {
    if (!finish && !correctWord) {
      return (
        <div className="d-flex flex-column align-items-center gap-2">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h5>Loading words...</h5>
        </div>
      );
    }
  };

  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      {renderDifficultySelector()}
      {renderLoadingSpinner()}
      {renderGameRound()}
      {renderGameResult()}
    </div>
  );
};

export default AudioChallengeRound;
