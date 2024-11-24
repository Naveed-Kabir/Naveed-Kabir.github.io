import { Navbar, Nav, Container } from 'react-bootstrap'

const Menu = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home' className='text-capitalize'>WanderSync</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>Introduction</Nav.Link>
              <Nav.Link href='#link'>UML</Nav.Link>
              <Nav.Link href='#link'>UI</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
