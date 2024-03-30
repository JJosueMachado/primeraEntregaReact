import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";
export const NavBar = () => {
  return (
    <>
      <Navbar bg="warning" data-bs-theme="warning">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            Velas&Spa
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/Velas" as={NavLink}>
              Velas
            </Nav.Link>
            <Nav.Link to="/category/Aceites" as={NavLink}>
              Aceites
            </Nav.Link>
            <Nav.Link to="/category/Fragancias" as={NavLink}>
              Fragancias
            </Nav.Link>
            <Nav.Link to="/category/Equipos" as={NavLink}>
              Equipos
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
