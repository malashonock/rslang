import styles from './App.module.scss';
import LoginForm from './features/auth/login-form/LoginForm';

export default function App(): JSX.Element {
  return (
    <div className={styles.appRoot}>
      RS Lang App
      <LoginForm />
    </div>
  );
}
