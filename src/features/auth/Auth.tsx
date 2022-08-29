import { useAppSelector } from '../../hooks';
import LoginForm from './login-form/LoginForm';
import UserUpdater from './UserUpdater';

const Auth = (): JSX.Element => {
  const { authorizeStatus } = useAppSelector((state) => state.authorization);
  return <div>{authorizeStatus ? <UserUpdater /> : <LoginForm />}</div>;
};

export default Auth;
