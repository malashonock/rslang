import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import Footer from './features/main-page/footer/Footer';
import Login from './features/auth/login-form/LoginForm';
import NavMenu from './features/main-page/nav-menu/NavMenu';

const App = (): JSX.Element => {
  return (
    <div className={styles.appRoot}>
      <NavMenu />
      <Login />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
