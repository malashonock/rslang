import { Container } from 'react-bootstrap';
import styles from './App.module.scss';
import NavMenu from './features/main-page/nav-menu/NavMenu';

const App = (): JSX.Element => {
  return (
    <div className={styles.appRoot}>
      <NavMenu />
      <Container>
        <h1>Main page content</h1>
      </Container>
    </div>
  );
};

export default App;
