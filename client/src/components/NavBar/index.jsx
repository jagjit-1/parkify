import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Parkify</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">lorem ipsum</Nav.Link>
                    <Nav.Link href="#features">lorem ipsum</Nav.Link>
                    <Nav.Link href="#pricing">lorem ipsum</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
}

export default Header;