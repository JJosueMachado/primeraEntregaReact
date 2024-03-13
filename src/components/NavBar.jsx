import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";
export const NavBar = () => {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="warning">
        <Container>
          <Navbar.Brand href="#home">Velas&Spa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Velas</Nav.Link>
            <Nav.Link href="#features">Aceites</Nav.Link>
            <Nav.Link href="#pricing">Equipos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
