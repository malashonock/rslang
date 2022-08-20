import { Card, Button, Row, Col } from 'react-bootstrap';
import styles from './WordCard.module.scss';

interface Word {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

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
        <b>Значение</b>
      </Card.Text>
      <Card.Text className={styles.engInfo}>{word.textMeaning}</Card.Text>
      <Card.Text className={styles.rusInfo}>{word.textMeaningTranslate}</Card.Text>
      <Card.Text className={styles.infoTitle}>
        <b>Пример</b>
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
          в сложные слова
        </Button>
      </Col>
      <Col>
        <Button className={styles.controls} size="sm" variant="warning">
          изучено
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
        <Card.Img className={styles.img} src={word.image} />
        {renderDescription(word)}
        {isAuthorized && renderFooter()}
      </Card.Body>
    </Card>
  );
};

export default WordCard;
