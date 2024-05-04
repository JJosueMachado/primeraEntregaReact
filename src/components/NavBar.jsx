import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";
export const NavBar = () => {
  return (
    <>
      <Navbar id="navTheme">
        <Container>
          <Navbar.Brand to="/" as={NavLink} style={{ color: "white" }}>
            <h4> Velas&Spa</h4>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/velas" as={NavLink}>
              Velas
            </Nav.Link>
            <Nav.Link to="/category/aceites" as={NavLink}>
              Aceites
            </Nav.Link>
            <Nav.Link to="/category/fragancias" as={NavLink}>
              Fragancias
            </Nav.Link>
            <Nav.Link to="/category/equipos" as={NavLink}>
              Equipos
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
