import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import Features from './features/main-page/features-section/Features';
import Footer from './features/main-page/footer/Footer';
import NavMenu from './features/main-page/nav-menu/NavMenu';

const App = (): JSX.Element => {
  return (
    <div className={styles.appRoot}>
      <NavMenu />
      <Container>
        <Outlet />
        <Features />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
