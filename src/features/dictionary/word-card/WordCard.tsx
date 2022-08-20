import { Card, Button, Row, Col, ToggleButton } from 'react-bootstrap';
import { ReactComponent as ListenWordIcon } from '../../../assets/icons/listen-word-icon.svg';
import styles from './WordCard.module.scss';
import Word from './Word';
import img from './minsk.jpg';

interface WordCardProps {
  word: Word;
  isAuthorized: boolean;
}

const renderHeader = (word: Word): JSX.Element => {
  return (
    <Row className={styles.header}>
      <Col>
        <Card.Title>
          {word.word} {word.transcription}
        </Card.Title>
        <Card.Subtitle>{word.wordTranslate}</Card.Subtitle>
      </Col>
      <Col sm="auto" xs="auto">
        <Button className={styles.listenWordButton} variant="primary" size="sm">
          <ListenWordIcon />
        </Button>
      </Col>
    </Row>
  );
};

const renderDescription = (word: Word) => {
  return (
    <>
      <Card.Text className={styles.infoTitle}>
        <b>Meaning</b>
      </Card.Text>
      <Card.Text className={styles.engInfo}>{word.textMeaning}</Card.Text>
      <Card.Text className={styles.rusInfo}>{word.textMeaningTranslate}</Card.Text>
      <Card.Text className={styles.infoTitle}>
        <b>Example</b>
      </Card.Text>
      <Card.Text className={styles.engInfo}>{word.textExample}</Card.Text>
      <Card.Text className={styles.rusInfo}>{word.textExampleTranslate}</Card.Text>
    </>
  );
};

const renderFooter = () => {
  return (
    <Row>
      <Col>
        <ToggleButton
          className={styles.controls}
          size="sm"
          variant="danger"
          type="checkbox"
          value="difficult"
          id="difficult"
        >
          Mark as Difficult
        </ToggleButton>
      </Col>
      <Col>
        <ToggleButton
          className={styles.controls}
          size="sm"
          variant="warning"
          type="checkbox"
          value="learned"
          id="learned"
        >
          Mark as Learned
        </ToggleButton>
      </Col>
    </Row>
  );
};

const WordCard = ({ word, isAuthorized }: WordCardProps): JSX.Element => {
  return (
    <Card className={styles.card}>
      <Card.Body>
        {renderHeader(word)}
        <Card.Img className={styles.img} src={img} />
        {renderDescription(word)}
        {isAuthorized && renderFooter()}
      </Card.Body>
    </Card>
  );
};

export default WordCard;
