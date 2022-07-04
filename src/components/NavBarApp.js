import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.svg";

const NavBarApp = ({ cambiadorDePagina }) => {
  return (
    <div class="NavBar">
      <Navbar bg="light" variant="light">
        {/* CONTENEDOR */}
        <Container>
          {/* ImagenLogo */}
          <Navbar.Brand
            onClick={() => {
              cambiadorDePagina("Index");
            }}
          >
            <img
              alt=""
              src={logo}
              width="48"
              height="48"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          {/* Links */}
          <Nav className="justify-content-end">
            {/* Inicio */}
            <Nav.Link
              onClick={() => {
                cambiadorDePagina("Index");
              }}
              style={{ color: "#06414d" }}
            >
              Inicio
            </Nav.Link>
            {/* QuienesSomos */}
            <Nav.Link
              onClick={() => {
                cambiadorDePagina("QuienesSomos");
              }}
              style={{ color: "#06414d" }}
            >
              Quienes Somos
            </Nav.Link>
            {/* Servicios */}
            <Nav.Link
              onClick={() => {
                cambiadorDePagina("Servicios");
              }}
              style={{ color: "#06414d" }}
            >
              Servicios
            </Nav.Link>
            {/* Contacto */}
            <Nav.Link
              onClick={() => {
                cambiadorDePagina("Contacto");
              }}
              style={{ color: "#06414d" }}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarApp;
