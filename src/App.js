import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";
import QuienesSomos from "./screens/QuienesSomos";
import Home from "./screens/Home";
import Servicios from "./screens/Servicios";
import Contacto from "./screens/Contacto";
import Firma from "./components/Firma";
import NavBarApp from "./components/NavBarApp";
import FootBarApp from "./components/FootBarApp";

const App = () => {
  const [paginaRenderizada, setPaginaRenderizada] = useState("Index");
  const [showIndex, setShowIndex] = useState(true);
  const [showQuienesSomos, setShowQuienesSomos] = useState(false);
  const [showServicios, setShowServicios] = useState(false);
  const [showContacto, setShowContacto] = useState(false);

  useEffect(() => {
    let aux = paginaRenderizada;
    if (aux === "Index") {
      setShowIndex(true);
      return;
    }
    if (aux === "QuienesSomos") {
      setShowQuienesSomos(true);
      return;
    }
    if (aux === "Servicios") {
      setShowServicios(true);
      return;
    }
    if (aux === "Contacto") {
      setShowContacto(true);
      return;
    }
  }, [paginaRenderizada]);

  const cambiadorDePagina = (paginaARenderizar) => {
    if (paginaRenderizada === "Index" && paginaARenderizar !== "Index") {
      setShowIndex(false);
      setPaginaRenderizada(paginaARenderizar);
      return;
    }
    if (
      paginaRenderizada === "QuienesSomos" &&
      paginaARenderizar !== "QuienesSomos"
    ) {
      setShowQuienesSomos(false);
      setPaginaRenderizada(paginaARenderizar);
      return;
    }
    if (
      paginaRenderizada === "Servicios" &&
      paginaARenderizar !== "Servicios"
    ) {
      setShowServicios(false);
      setPaginaRenderizada(paginaARenderizar);
      return;
    }
    if (paginaRenderizada === "Contacto" && paginaARenderizar !== "Contacto") {
      setShowContacto(false);
      setPaginaRenderizada(paginaARenderizar);
      return;
    }
  };

  return (
    <Router>
      {/* NAVBAR */}
      <NavBarApp cambiadorDePagina={cambiadorDePagina} />
      {/* Body */}
      <div style={{ height: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes_somos" element={<QuienesSomos />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </div>
      {/* FOOTBAR */}
      <FootBarApp cambiadorDePagina={cambiadorDePagina} />
      {/* FIRMA */}
      <Firma />
    </Router>
  );
};

export default App;
