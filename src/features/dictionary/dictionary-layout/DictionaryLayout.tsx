import { Outlet } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ChaptersSelector from '../chapters-selector/ChaptersSelector';
import styles from './DictionaryLayout.module.scss';

const DictionaryLayout = () => {
  return (
    <div className={styles.dictionaryWrapper}>
      <Row>
        <Col sm="auto" xs="auto">
          <ChaptersSelector />
        </Col>
        <Col className={styles.outlet}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default DictionaryLayout;
