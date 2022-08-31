import styles from './UserAvatar.module.scss';
import { ReactComponent as AnonymousUserAvatar } from '../../../../assets/icons/anonymous-user-avatar.svg';

const UserAvatar = (): JSX.Element => {
  return (
    <div className={styles.userAvatar}>
      <AnonymousUserAvatar />
    </div>
  );
};

export default UserAvatar;
