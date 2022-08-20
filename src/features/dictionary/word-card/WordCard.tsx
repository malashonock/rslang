import { Card, Button, Row, Col } from 'react-bootstrap';
import styles from './WordCard.module.scss';

interface IWord {
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

interface IWordData {
  cardData: IWord;
}

interface ICardData extends IWordData {
  isAuthorized: boolean;
}

function Header({ cardData }: IWordData): JSX.Element {
  return (
    <Row className={styles.header}>
      <Col>
        <Card.Title>
          {cardData.word} {cardData.transcription}
        </Card.Title>
        <Card.Subtitle>{cardData.wordTranslate}</Card.Subtitle>
      </Col>
      <Col sm="auto" xs="auto">
        <Button variant="primary">listen</Button>
      </Col>
    </Row>
  );
}

function Desc({ cardData }: IWordData) {
  return (
    <>
      <Card.Text className={styles.infoTitle}>
        <b>Значение</b>
      </Card.Text>
      <Card.Text className={styles.engInfo}>{cardData.textMeaning}</Card.Text>
      <Card.Text className={styles.rusInfo}>{cardData.textMeaningTranslate}</Card.Text>
      <Card.Text className={styles.infoTitle}>
        <b>Пример</b>
      </Card.Text>
      <Card.Text className={styles.engInfo}>{cardData.textExample}</Card.Text>
      <Card.Text className={styles.rusInfo}>{cardData.textExampleTranslate}</Card.Text>
    </>
  );
}

function Controls() {
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
}

function WordCard({ cardData, isAuthorized }: ICardData): JSX.Element {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Header cardData={cardData} />
        <Card.Img className={styles.img} src={cardData.image} />
        <Desc cardData={cardData} />
        {isAuthorized && Controls()}
      </Card.Body>
    </Card>
  );
}

export default WordCard;
