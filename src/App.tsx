import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';
import Footer from './features/main-page/footer/Footer';
import LoginForm from './features/auth/login-form/LoginForm';
import NavMenu from './features/main-page/nav-menu/NavMenu';

const App = (): JSX.Element => {
  return (
    <div className={styles.appRoot}>
      <NavMenu />
      <LoginForm />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
