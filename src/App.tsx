import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import Footer from './features/main-page/footer/Footer';
import NavMenu from './features/main-page/nav-menu/NavMenu';

const App = (): JSX.Element => {
  return (
    <div className={styles.appRoot}>
      <NavMenu />
      <Container className="flex-grow-1 d-flex flex-column">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
