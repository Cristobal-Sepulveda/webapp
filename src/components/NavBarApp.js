import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.svg";

const NavBarApp = ({}) => {
  // return (
  //   <Navbar bg="dark" variant="dark">
  //     <Container>
  //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //       <Nav className="me-auto">
  //         <Nav.Link href="/">Home</Nav.Link>
  //         <Nav.Link href="#features">Features</Nav.Link>
  //         <Nav.Link href="#pricing">Pricing</Nav.Link>
  //       </Nav>
  //     </Container>
  //   </Navbar>
  // );
  return (
    <div class="NavBar">
      <Navbar bg="light" variant="light">
        {/* CONTENEDOR */}
        <Container>
          {/* ImagenLogo */}
          <Navbar.Brand href="/">
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
            <Nav.Link href="/" style={{ color: "#06414d" }}>
              Inicio
            </Nav.Link>
            {/* QuienesSomos */}
            <Nav.Link href="/quienes_somos" style={{ color: "#06414d" }}>
              Quienes Somos
            </Nav.Link>
            {/* Servicios */}
            <Nav.Link href="/servicios" style={{ color: "#06414d" }}>
              Servicios
            </Nav.Link>
            {/* Contacto */}
            <Nav.Link href="/contacto" style={{ color: "#06414d" }}>
              Contacto
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarApp;
