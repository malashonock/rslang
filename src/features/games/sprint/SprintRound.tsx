/* eslint-disable consistent-return */
import { useEffect, useMemo, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { getWords } from '../../../api/words';
import { AuthState } from '../../../model/AuthState';
import GameTurnResult from '../../../model/GameTurnResult';
import Word from '../../../model/Word';
import { useAppSelector } from '../../../store/hooks';
import { RootState } from '../../../store/store';

import { Seconds } from '../../../utils/types';
import CountDown from '../shared/count-down/CountDown';
import DifficultyLevelSelector from '../shared/difficulty-level-selector/DifficultyLevelSelector';
import saveGameResults from '../shared/saveGameResults';
import SprintTurn from './sprint-turn/SprintTurn';

const ROUND_DURATION: Seconds = 60;
const TICK_FREQUENCY: Seconds = 1;

export interface LevelRules {
  scorePerWin: number;
  winsToLevelUp?: number;
}

const LevelsConfig: { [level: number]: LevelRules } = {
  1: { scorePerWin: 10, winsToLevelUp: 4 },
  2: { scorePerWin: 20, winsToLevelUp: 4 },
  3: { scorePerWin: 40, winsToLevelUp: 4 },
  4: { scorePerWin: 80 },
};

const SprintRound = (): JSX.Element => {
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

  const [level, setLevel] = useState(1);
  const [turn, setTurn] = useState(1);
  const [winsSinceLevelStart, setWinsSinceLevelStart] = useState(0);
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

  const translation = useMemo((): string => {
    const source = availableWords.filter((word) => word.id !== correctWord?.id);
    const randomIndex = Math.floor(Math.random() * (source.length - 1));
    const randomWord = source[randomIndex];

    const isTranslationCorrect = Boolean(Math.round(Math.random()));

    return isTranslationCorrect
      ? correctWord?.wordTranslate || ''
      : randomWord?.wordTranslate || '';
  }, [availableWords, correctWord?.id, correctWord?.wordTranslate]);

  const levelUp = (): void => {
    const maxLevel = Math.max(...Object.keys(LevelsConfig).map((key) => +key));

    if (level + 1 <= maxLevel) {
      setLevel(level + 1);
      setWinsSinceLevelStart(0);
    }
  };

  const updateGameResult = (isCorrect: boolean): void => {
    const turnResult: GameTurnResult = {
      word: correctWord as Word,
      wasGuessed: isCorrect,
    };

    setGameResult([...gameResult, turnResult]);

    if (isCorrect) {
      const { scorePerWin, winsToLevelUp } = LevelsConfig[level];

      setScore(score + scorePerWin);

      const updatedWinsSinceLevelStart = winsSinceLevelStart + 1;

      if (winsToLevelUp && updatedWinsSinceLevelStart >= winsToLevelUp) {
        levelUp();
      } else {
        setWinsSinceLevelStart(updatedWinsSinceLevelStart);
      }
    } else {
      setLevel(1);
      setWinsSinceLevelStart(0);
    }
  };

  const handleNextTurn = (isCorrect: boolean): void => {
    updateGameResult(isCorrect);

    if (!finish) {
      setTurn(turn + 1);
      updateCorrectWords();
    }
  };

  const handleQuit = (): void => {
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
      saveGameResults(userId, new Date(), 'sprint', gameResult);
    }
  }, [authorizeStatus, finish, gameResult, userId]);

  const renderGameResult = (): JSX.Element | undefined => {
    if (finish) {
      return (
        <>
          <h3>Your score: {score}</h3>
          <p>
            {JSON.stringify(
              gameResult.map((result) => ({
                word: result.word.word,
                wasGuessed: result.wasGuessed,
              }))
            )}
          </p>
        </>
      );
    }
  };

  const renderGameRound = (): JSX.Element | undefined => {
    if (ready && correctWord && !finish) {
      return (
        <SprintTurn
          correctWord={correctWord}
          translation={translation}
          onAnswer={handleNextTurn}
          onQuit={handleQuit}
          level={level}
          levelRules={LevelsConfig[level]}
          winsSinceLevelStart={winsSinceLevelStart}
          score={score}
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

  const renderCountDown = (): JSX.Element | undefined => {
    if (ready && !finish) {
      return (
        <CountDown
          totalTime={ROUND_DURATION}
          tickFrequency={TICK_FREQUENCY}
          onFinished={() => setFinish(true)}
          className="position-absolute top-0 start-0 m-3"
        />
      );
    }
  };

  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center position-relative">
      {renderDifficultySelector()}
      {renderLoadingSpinner()}
      {renderCountDown()}
      {renderGameRound()}
      {renderGameResult()}
    </div>
  );
};

export default SprintRound;
