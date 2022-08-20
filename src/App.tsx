import { Container } from 'react-bootstrap';
import styles from './App.module.scss';
import Footer from './features/main-page/footer/Footer';
import NavMenu from './features/main-page/nav-menu/NavMenu';

const App = (): JSX.Element => {
  return (
    <div className={styles.appRoot}>
      <NavMenu />
      <Container>
        <h1>Main page content</h1>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
