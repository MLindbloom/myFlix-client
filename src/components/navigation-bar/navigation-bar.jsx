import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigation-bar.scss';

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container className='nav-bar'>
        <Navbar.Brand as={Link} to='/'>
          myFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {!user && (
              <>
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to='/signup'>
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to='/profile'>
                  Profile
                </Nav.Link>
              </>
            )}
          </Nav>
          {user && (
            <Nav className='justify-content-end ms-auto'>
              <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
