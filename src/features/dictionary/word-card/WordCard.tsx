import { Card, Button, Row, Col } from 'react-bootstrap';
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
        <Button variant="primary">listen</Button>
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
        <Button className={styles.controls} size="sm" variant="danger">
          to difficult
        </Button>
      </Col>
      <Col>
        <Button className={styles.controls} size="sm" variant="warning">
          studied
        </Button>
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
