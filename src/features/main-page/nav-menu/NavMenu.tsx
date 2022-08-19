import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import UserAvatar from './user-avatar/UserAvatar';

const NavMenu = (): JSX.Element => {
  return (
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
        <Nav.Link>
          <UserAvatar />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
