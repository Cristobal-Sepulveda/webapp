import React, { useEffect, useState } from "react";

import "./App.css";
import QuienesSomos from "./screens/QuienesSomos";
import Index from "./screens/Index";
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
    // Contenedor
    <div className="Container" style={{ backgroundColor: "#fff" }}>
      {/* NAVBAR */}
      <NavBarApp cambiadorDePagina={cambiadorDePagina} />
      {/* Body */}
      <div style={{ height: "100%" }}>
        {showIndex ? (
          <Index />
        ) : showQuienesSomos ? (
          <QuienesSomos />
        ) : showServicios ? (
          <Servicios />
        ) : showContacto ? (
          <Contacto />
        ) : (
          <div></div>
        )}
      </div>
      {/* FOOTBAR */}
      <FootBarApp cambiadorDePagina={cambiadorDePagina} />
      {/* FIRMA */}
      <Firma />
    </div>
  );
};

export default App;
