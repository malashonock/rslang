import { Navbar } from 'react-bootstrap';

type Orientation = 'left' | 'right';

const Footer = (position: Orientation): JSX.Element => {
  return (
    <Navbar bg="primary" variant="dark" expand="sm">
      {position}
    </Navbar>
  );
};

export default Footer;
