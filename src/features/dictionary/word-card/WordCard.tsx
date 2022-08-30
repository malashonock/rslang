import { Card, Row, Col, ToggleButton } from 'react-bootstrap';
import styles from './WordCard.module.scss';
import Word from '../../../model/Word';
import WordPicture from '../../shared/word-picture/WordPicture';
import SoundButton from '../../shared/sound-button/SoundButton';
import API_BASE_URL from '../../../api/constants';

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
        <SoundButton soundSrc={`${API_BASE_URL}/${word.audio}`} />
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
      <Card.Text
        className={styles.engInfo}
        dangerouslySetInnerHTML={{ __html: word.textMeaning }}
      />
      <Card.Text
        className={styles.rusInfo}
        dangerouslySetInnerHTML={{ __html: word.textMeaningTranslate }}
      />
      <Card.Text className={styles.infoTitle}>
        <b>Example</b>
      </Card.Text>
      <Card.Text
        className={styles.engInfo}
        dangerouslySetInnerHTML={{ __html: word.textExample }}
      />
      <Card.Text
        className={styles.rusInfo}
        dangerouslySetInnerHTML={{ __html: word.textExampleTranslate }}
      />
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
        <WordPicture
          className={styles.img}
          imageSrc={`${API_BASE_URL}/${word.image}`}
          diameter="10rem"
        />
        {renderDescription(word)}
        {isAuthorized && renderFooter()}
      </Card.Body>
    </Card>
  );
};

export default WordCard;
