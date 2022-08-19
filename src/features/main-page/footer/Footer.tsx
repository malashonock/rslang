import { Container, Navbar, Image, Nav } from 'react-bootstrap';
import github from '../../../assets/github.png';
import rssschool from '../../../assets/rs_school_js.svg';
import styles from './Footer.module.scss';

function Footer(): JSX.Element {
  return (
    <Navbar fixed="bottom" bg="primary" variant="dark" expand="sm">
      <Container className="justify-content-between">
        <Nav>
          <Navbar.Brand href="#home">RSLang 2022 year</Navbar.Brand>
        </Nav>
        <Nav className="justify-content-center">
          <Nav.Link href="https://rollingscopes.com/">
            <Image className={styles.logo_rss} src={rssschool} />
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end d-flex">
          <Image className={styles.logo} src={github} />
          <Nav.Link eventKey="link-1" href="https://github.com/malashonock">
            malashonock
          </Nav.Link>
          <Nav.Link eventKey="link-2" href="https://github.com/qrvck">
            qrvck
          </Nav.Link>
          <Nav.Link eventKey="link-3" href="https://github.com/stanlys">
            stanlys
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;

/*
<Navbar bg="primary" variant="dark" expand="sm">
      <Container fluid className="d-flex"> {styles.main_footer}
*/
