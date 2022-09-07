/* eslint-disable consistent-return */
import { useEffect, useMemo, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { getUserWords } from '../../../api/userWords';
import { getWords } from '../../../api/words';
import { AuthState } from '../../../model/AuthState';
import GameTurnResult from '../../../model/GameTurnResult';
import { UserWord } from '../../../model/UserWord';
import Word from '../../../model/Word';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { RootState } from '../../../store/store';
import useDictionaryLocation from '../../../utils/hooks/useDictionaryLocation';
import { fetchUserPages } from '../../dictionary/dictionarySlice';
import DifficultyLevelSelector from '../shared/difficulty-level-selector/DifficultyLevelSelector';
import GameResult from '../shared/game-result/GameResult';
import saveGameResults from '../shared/saveGameResults';
import AudioChallengeTurn from './AudioChallengeTurn';

const AudioChallengeRound = (): JSX.Element => {
  const { id: userId, authorizeStatus } = useAppSelector(
    (state: RootState): AuthState => state.authorization
  );

  const { chapter, page } = useDictionaryLocation();

  const [searchParams] = useSearchParams();
  const excludeLearnedWords = useMemo(() => {
    return searchParams.get('exclude-learned') === 'true';
  }, [searchParams]);

  const dispatch = useAppDispatch();

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
      const allWords = await getWords(chapter, page);
      let freeWords: Word[];

      if (authorizeStatus && excludeLearnedWords) {
        const userWords = await getUserWords(userId);
        freeWords = allWords.filter(
          (word: Word): boolean =>
            !userWords.some(
              (userWord: UserWord): boolean => word.id === userWord.wordId && userWord.isLearned
            )
        );
      } else {
        freeWords = allWords;
      }

      if (freeWords.length < 2) {
        setFinish(true);
      }

      setAvailableWords([...freeWords]);
      setCorrectWords([...freeWords]);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadWords();
  }, [authorizeStatus, chapter, excludeLearnedWords, page, userId]);

  // Set new correct word
  useEffect(() => {
    if (correctWords.length === 0) {
      if (turn > 1) {
        setFinish(true);
      }

      return;
    }

    const randomIndex = Math.floor(Math.random() * correctWords.length);
    setCorrectWord(correctWords[randomIndex]);
  }, [correctWords, turn]);

  const updateCorrectWords = () => {
    setCorrectWords(correctWords.filter(({ id }) => id !== correctWord?.id));
  };

  const incorrectWords = useMemo((): Word[] => {
    const source = availableWords.filter((word) => word.id !== correctWord?.id);

    if (turn > 1 && source.length === 0) {
      setFinish(true);
    }

    const selection: Word[] = [];

    for (let i = 1; i < WORDS_PER_TURN && i <= source.length; i += 1) {
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
      if (chapter === undefined && page === undefined) {
        return <DifficultyLevelSelector show={!ready} onHide={() => setReady(true)} />;
      }

      setReady(true);
    }
  };

  useEffect(() => {
    if (finish && userId && authorizeStatus === true) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      saveGameResults(userId, new Date(), 'audio-challenge', gameResult);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchUserPages(userId));
    }
  }, [authorizeStatus, chapter, dispatch, finish, gameResult, page, userId]);

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
