import { Col, Row, Stack } from 'react-bootstrap';
import API_BASE_URL from '../../../api/constants';
import GameTurnResult from '../../../model/GameTurnResult';
import SoundButton from '../../shared/sound-button/SoundButton';

interface GameResultProps {
  score: number;
  gameResult: GameTurnResult[];
}

const GameResult = ({ score, gameResult }: GameResultProps) => {
  const correctGuesses = gameResult.filter((result: GameTurnResult): boolean => result.wasGuessed);
  const wrongGuesses = gameResult.filter((result: GameTurnResult): boolean => !result.wasGuessed);

  return (
    <Stack gap={3} className="col-sm-9 col-md-7 col-lg-5 my-3 mx-auto flex-grow-0">
      <h2 className="text-center">Your score: {score}</h2>
      <Stack gap={2} className={wrongGuesses.length > 0 ? '' : 'd-none'}>
        <h3>
          Wrong{' '}
          <span className="bg-danger text-white rounded-pill px-3">{wrongGuesses.length}</span>
        </h3>
        <Stack gap={2}>
          {wrongGuesses.map((result: GameTurnResult) => (
            <Row key={result.word.id} className="row-cols-auto">
              <Col>
                <SoundButton
                  soundSrc={`${API_BASE_URL}/${result.word.audio}`}
                  diameter="2rem"
                  variant="secondary"
                />
              </Col>
              <Col>
                <span className="fw-semibold">{result.word.word}</span>
                <span className="text-secondary"> &mdash; {result.word.wordTranslate}</span>
              </Col>
            </Row>
          ))}
        </Stack>
      </Stack>
      <hr className={wrongGuesses.length > 0 && correctGuesses.length > 0 ? '' : 'd-none'} />
      <Stack gap={2} className={correctGuesses.length > 0 ? '' : 'd-none'}>
        <h3>
          Correct{' '}
          <span className="bg-success text-white rounded-pill px-3">{correctGuesses.length}</span>
        </h3>
        <Stack gap={2}>
          {correctGuesses.map((result: GameTurnResult) => (
            <Row key={result.word.id} className="row-cols-auto">
              <Col>
                <SoundButton
                  soundSrc={`${API_BASE_URL}/${result.word.audio}`}
                  diameter="2rem"
                  variant="secondary"
                />
              </Col>
              <Col>
                <span className="fw-semibold">{result.word.word}</span>
                <span className="text-secondary"> &mdash; {result.word.wordTranslate}</span>
              </Col>
            </Row>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GameResult;
