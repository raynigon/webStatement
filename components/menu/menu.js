import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function Menu() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Statement</Nav.Link>
                        <Nav.Link href="/signatories">Signatories</Nav.Link>
                        <NavDropdown title="Press coverage" id="basic-nav-dropdown">
                            <NavDropdown.Item href="press/zeit">Article: DIE ZEIT</NavDropdown.Item>
                            <NavDropdown.Item href="press/reception">Press Reception</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/interviews">Author Interviews</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}