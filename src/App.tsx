import { Container } from 'react-bootstrap';
import styles from './App.module.scss';

export default function App(): JSX.Element {
  return (
    <div className={styles.appRoot}>
      <Container>
        <h1>Main page content</h1>
      </Container>
    </div>
  );
}
