import { Container, Navbar, Image, Nav } from 'react-bootstrap';
import github from '../../../assets/github.png';
import rsschool from '../../../assets/rs_school_js.svg';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <Navbar bg="primary" variant="dark" expand="sm">
      <Container className="justify-content-between">
        <Nav className="d-flex gap-2">
          <Nav.Link href="https://rs.school/js/">
            <Image className={styles.logoRss} src={rsschool} />
          </Nav.Link>
          <Nav.Item className="text-light d-flex align-items-center">2022</Nav.Item>
        </Nav>
        <Nav className="d-flex align-items-center">
          <Image className={styles.logoGitHub} src={github} />
          <Nav.Link eventKey="Author-1" href="https://github.com/malashonock">
            malashonock
          </Nav.Link>
          <Nav.Link eventKey="Author-2" href="https://github.com/qrvck">
            qrvck
          </Nav.Link>
          <Nav.Link eventKey="Author-3" href="https://github.com/stanlys">
            stanlys
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
