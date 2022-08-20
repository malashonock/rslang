import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';

export default function App(): JSX.Element {
  return <div className={styles.appRoot}>RS Lang App</div>;
}
