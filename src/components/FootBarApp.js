import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.svg";

const FootBarApp = ({ cambiadorDePagina }) => {
  return (
    <div sticky="bottom" style={{ marginBottom: 31.5 }}>
      <Navbar style={{ backgroundColor: "#143e61" }} variant="light">
        <Container>
          <Navbar.Brand
            onClick={() => {
              cambiadorDePagina("Index");
            }}
          >
            <img
              alt=""
              src={logo}
              width="192"
              height="192"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          {/* Links */}
          <div style={{ flexDirection: "column" }}>
            {/* Links */}
            <p
              style={{
                fontSize: 16,
                color: "white",
                marginLeft: 8,
                marginTop: 0,
              }}
            >
              LINKS
            </p>
            {/* Inicio */}
            <p
              style={{
                fontSize: 14,
                color: "white",
                marginLeft: 8,
                marginTop: 10,
                marginBottom: 5,
              }}
            >
              <a
                onClick={() => {
                  cambiadorDePagina("Index");
                }}
                style={{ color: "white", textDecoration: "none" }}
              >
                Inicio
              </a>
            </p>
            {/* Quiénes Somos */}
            <p
              style={{
                fontSize: 14,
                color: "white",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <a
                onClick={() => {
                  cambiadorDePagina("QuienesSomos");
                }}
                style={{ color: "white", textDecoration: "none" }}
              >
                Quienes Somos
              </a>
            </p>
            {/* Servicios */}
            <p
              style={{
                fontSize: 14,
                color: "white",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <a
                onClick={() => {
                  cambiadorDePagina("Servicios");
                }}
                style={{ color: "white", textDecoration: "none" }}
              >
                Servicios
              </a>
            </p>
            {/* Contacto */}
            <p
              style={{
                fontSize: 14,
                color: "white",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <a
                onClick={() => {
                  cambiadorDePagina("Contacto");
                }}
                style={{ color: "white", textDecoration: "none" }}
              >
                Contacto
              </a>
            </p>
          </div>
          {/* Contacto */}
          <div style={{ flexDirection: "column" }}>
            <p
              style={{
                fontSize: 16,
                color: "white",
                marginLeft: 8,
                marginTop: 0,
              }}
            >
              CONTACTO
            </p>
            <p
              style={{
                fontSize: 14,
                color: "white",
                marginLeft: 8,
                marginTop: 10,
                marginBottom: 5,
              }}
            >
              correo@institucional.cl
            </p>
            <p
              style={{
                fontSize: 14,
                color: "white",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              Dirección Particular #000, Santiago, Chile
            </p>
            <p
              style={{
                fontSize: 14,
                color: "white",
                marginLeft: 8,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              +562 0000 0000
            </p>
            <p
              style={{
                fontSize: 14,

                marginLeft: 8,
                marginTop: 20,
                marginBottom: 5,
              }}
            >
              <a style={{ color: "#143e61", textDecoration: "none" }}>|</a>
            </p>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default FootBarApp;
