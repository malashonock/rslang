import { Container, Navbar, Image, Nav } from 'react-bootstrap';
import github from '../../../assets/github';
// import github from '../../../assets/github.svg';
// import CardHeader from 'react-bootstrap/esm/CardHeader';

function Footer(): JSX.Element {
  return (
    <Navbar fixed="bottom">
      <Container>
        <Nav>
          <Navbar.Brand href="#home">RSLang 2022 year</Navbar.Brand>
        </Nav>
        <Nav className="justify-content-center">
          <Image roundedCircle src={github} />
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link eventKey="link-1">Author1</Nav.Link>
          <Nav.Link eventKey="link-2">Author2</Nav.Link>
          <Nav.Link eventKey="link-3">Author3</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;

/*
      <Navbar bg="primary" variant="dark" expand="sm">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-main" />
          <Navbar.Brand href="/">RS Lang</Navbar.Brand>
          <Navbar.Offcanvas id="navbar-main">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>RS Lang</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link href="/dictionary">Dictionary</Nav.Link>
                <NavDropdown title="Mini-games" id="nav-dropdown-games">
                  <NavDropdown.Item href="/games/audio-challenge">Audio Challenge</NavDropdown.Item>
                  <NavDropdown.Item href="/games/sprint">Sprint</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/statistics">Statistics</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
*/
