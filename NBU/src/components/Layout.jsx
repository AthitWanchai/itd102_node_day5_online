import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Navbar expand="lg" bg="success" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/">North Bangkok University</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/employee">Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className="my-3">
    <Outlet />
    </Container>

    <Footer/>
      
    </>
  )
};

export default Layout;