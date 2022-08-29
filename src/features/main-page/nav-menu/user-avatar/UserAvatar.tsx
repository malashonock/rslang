import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styles from './UserAvatar.module.scss';
import { ReactComponent as AnonymousUserAvatar } from '../../../../assets/icons/anonymous-user-avatar.svg';
import { ReactComponent as LogoutIcon } from '../../../../assets/icons/logout.svg';
import { useAppSelector } from '../../../../store/hooks';
import { deleteUserData } from '../../../../reducers/auth.slice';
import { getUserFromLocalStorage } from '../../../../utils/localStorage';

const UserAvatar = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.authorization) || 'GUEST';

  const dispatch = useDispatch();

  const logOut = () => {
    const existUser = getUserFromLocalStorage();
    dispatch(deleteUserData(existUser));
  };

  return (
    <div className={styles.userAvatar}>
      <Nav.Link>{name} </Nav.Link>
      <AnonymousUserAvatar />
      {name && <LogoutIcon onClick={logOut} />}
    </div>
  );
};

export default UserAvatar;
