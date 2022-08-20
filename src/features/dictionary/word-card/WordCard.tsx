import { Card, Button, Row, Col } from 'react-bootstrap';
import styles from './WordCard.module.scss';

interface IWordData {
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

interface ICardData {
  wordData: IWordData;
  isAuthorized: boolean;
}

const renderHeader = (wordData: IWordData): JSX.Element => {
  return (
    <Row className={styles.header}>
      <Col>
        <Card.Title>
          {wordData.word} {wordData.transcription}
        </Card.Title>
        <Card.Subtitle>{wordData.wordTranslate}</Card.Subtitle>
      </Col>
      <Col sm="auto" xs="auto">
        <Button variant="primary">listen</Button>
      </Col>
    </Row>
  );
};

const renderDescription = (wordData: IWordData) => {
  return (
    <>
      <Card.Text className={styles.infoTitle}>
        <b>Значение</b>
      </Card.Text>
      <Card.Text className={styles.engInfo}>{wordData.textMeaning}</Card.Text>
      <Card.Text className={styles.rusInfo}>{wordData.textMeaningTranslate}</Card.Text>
      <Card.Text className={styles.infoTitle}>
        <b>Пример</b>
      </Card.Text>
      <Card.Text className={styles.engInfo}>{wordData.textExample}</Card.Text>
      <Card.Text className={styles.rusInfo}>{wordData.textExampleTranslate}</Card.Text>
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

const WordCard = ({ wordData, isAuthorized }: ICardData): JSX.Element => {
  return (
    <Card className={styles.card}>
      <Card.Body>
        {renderHeader(wordData)}
        <Card.Img className={styles.img} src={wordData.image} />
        {renderDescription(wordData)}
        {isAuthorized && renderFooter()}
      </Card.Body>
    </Card>
  );
};

export default WordCard;
