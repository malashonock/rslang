import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GameTurnResult from '../../../../model/GameTurnResult';
import styles from './GameResult.module.scss';
import GameResultSection from './GameResultSection';

interface GameResultProps {
  score: number;
  gameResult: GameTurnResult[];
}

const GameResult = ({ score, gameResult }: GameResultProps) => {
  const navigate = useNavigate();
  const correctGuesses = gameResult.filter((result: GameTurnResult): boolean => result.wasGuessed);
  const wrongGuesses = gameResult.filter((result: GameTurnResult): boolean => !result.wasGuessed);

  return (
    <Stack gap={3} className="col-sm-9 col-md-7 col-lg-5 my-3 mx-auto flex-grow-0">
      <h2 className="text-center">Your score: {score}</h2>
      <GameResultSection answers={wrongGuesses} areCorrect={false} />
      <hr className={wrongGuesses.length > 0 && correctGuesses.length > 0 ? '' : 'd-none'} />
      <GameResultSection answers={correctGuesses} areCorrect />
      <Button className={styles.restartButton} onClick={() => navigate(0)}>
        Train again
      </Button>
    </Stack>
  );
};

export default GameResult;
