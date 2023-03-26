import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarHeader() {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" color>
      <Container className="pt-2">
        <Navbar.Brand href="/" style={{ color: "black" }}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/login" style={{ color: "black" }}>
              Login
            </Nav.Link>
            <Nav.Link href="/register" style={{ color: "black" }}>
              Register
            </Nav.Link>
            <Nav.Link href="/" style={{ color: "black" }}>
              My Work
            </Nav.Link>
            <Nav.Link
              href="/login"
              style={{ color: "black" }}
              onClick={handleLogout}
            >
              Log-Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
