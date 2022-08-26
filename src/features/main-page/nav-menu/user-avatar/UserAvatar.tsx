import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './UserAvatar.module.scss';
import { ReactComponent as AnonymousUserAvatar } from '../../../../assets/icons/anonymous-user-avatar.svg';
import LoginForm from '../../../auth/login-form/LoginForm';

const UserAvatar = (): JSX.Element => {
  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.userAvatar}>
        <AnonymousUserAvatar onClick={handleShow} />
      </div>
      <Modal show={show} onHide={modalClose}>
        <LoginForm />
      </Modal>
    </>
  );
};

export default UserAvatar;
