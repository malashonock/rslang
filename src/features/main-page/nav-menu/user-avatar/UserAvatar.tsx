import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styles from './UserAvatar.module.scss';
import { ReactComponent as AnonymousUserAvatar } from '../../../../assets/icons/anonymous-user-avatar.svg';
import { useAppSelector } from '../../../../hooks';
import { deleteUserData } from '../../../../reducers/auth.slice';
import { getUserFromLocalStorage } from '../../../../utils/localStorage';
import { AuthorizationState } from '../../../../model/store';

const UserAvatar = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.authorization) || 'GUEST';

  const dispatch = useDispatch();

  const logOut = () => {
    const existUser: AuthorizationState = getUserFromLocalStorage();
    dispatch(deleteUserData(existUser));
  };

  return (
    <div className={styles.userAvatar}>
      <h3>{name}</h3>
      <AnonymousUserAvatar />
      {name && <Button onClick={logOut}>EXIT</Button>}
    </div>
  );
};

export default UserAvatar;
