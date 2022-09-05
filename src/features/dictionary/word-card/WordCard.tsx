import { Card, Row, Col, ToggleButton, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { useState } from 'react';
import styles from './WordCard.module.scss';
import Word from '../../../model/Word';
import WordPicture from '../../shared/word-picture/WordPicture';
import SoundButton from '../../shared/sound-button/SoundButton';
import API_BASE_URL from '../../../api/constants';

interface WordCardProps {
  word: Word;
  isAuthorized: boolean;
  isLearned: boolean;
  isDifficult: boolean;
}

interface RenderFooterProps {
  isDifficult: boolean;
  isLearned: boolean;
  id: string;
}

const renderHeader = (word: Word): JSX.Element => {
  return (
    <Row className={styles.header}>
      <Col>
        <Card.Title>{word.word}</Card.Title>
        <Card.Subtitle>{word.transcription}</Card.Subtitle>
        <Card.Subtitle>{word.wordTranslate}</Card.Subtitle>
      </Col>
      <Col sm="auto" xs="auto">
        <SoundButton soundSrc={`${API_BASE_URL}/${word.audio}`} />
      </Col>
    </Row>
  );
};

const renderDescription = (word: Word) => {
  const description = (
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

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{word.word}</Popover.Header>
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );

  return (
    <>
      <div className={styles.description}>{description}</div>
      <OverlayTrigger placement="top" overlay={popover}>
        <Button className={styles.showAllButton} variant="outline-secondary" size="sm">
          show all
        </Button>
      </OverlayTrigger>
    </>
  );
};

const RenderFooter = ({ isDifficult, isLearned, id }: RenderFooterProps) => {
  const [difficultState, updateDifficultState] = useState(isDifficult);
  const [learnedState, updatelearnedState] = useState(isLearned);

  function difficultCheckboxHandler() {
    updateDifficultState(!difficultState);
  }

  function learnedCheckboxHandler() {
    updatelearnedState(!learnedState);
  }

  return (
    <Row>
      <Col>
        <ToggleButton
          className={styles.controls}
          size="sm"
          variant={isDifficult ? 'danger' : 'outline-danger'}
          type="checkbox"
          value="difficult"
          id={`${id}-difficult`}
          checked={difficultState}
          onChange={() => difficultCheckboxHandler()}
        >
          {difficultState ? 'Marked as Difficult' : 'Mark as Difficult'}
        </ToggleButton>
      </Col>
      <Col>
        <ToggleButton
          className={styles.controls}
          size="sm"
          variant={isLearned ? 'warning' : 'outline-warning'}
          type="checkbox"
          value="learned"
          id={`${id}-learned`}
          checked={learnedState}
          onChange={() => learnedCheckboxHandler()}
        >
          {learnedState ? 'Marked as Learned' : 'Mark as Learned'}
        </ToggleButton>
      </Col>
    </Row>
  );
};

const WordCard = ({ word, isAuthorized, isDifficult, isLearned }: WordCardProps): JSX.Element => {
  return (
    <Card className={styles.card}>
      <Card.Body>
        {renderHeader(word)}
        <WordPicture
          className={styles.img}
          imageSrc={`${API_BASE_URL}/${word.image}`}
          diameter="9rem"
        />
        {renderDescription(word)}
        {isAuthorized && (
          <RenderFooter isDifficult={isDifficult} isLearned={isLearned} id={word.id} />
        )}
      </Card.Body>
    </Card>
  );
};

export default WordCard;
