import { Container,  Navbar, Nav } from 'react-bootstrap'
import resume from './cv-iulia-puiu.pdf'

const Header = props => {
    return (
        <Navbar expand="lg" style={{backgroundColor: '#e4f4f0'}}>
            <Container>
                <Nav>
                    <Navbar.Brand href="/">
                        <h6 style={{ color: '#485152', fontSize: 28 }}>
                            PIsoft
                        </h6>
                        {/* add an image logo */}
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href={resume} target="_blank">Resumé</Nav.Link>
                        {/* <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  };

export default Header;