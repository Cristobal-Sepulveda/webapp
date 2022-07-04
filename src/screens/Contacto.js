import logo from "../assets/logo.svg";

const Contacto = () => {
  return (
    <div>
      <div className="Center">
        <img
          style={{
            height: 360,
            width: 360,
          }}
          src={logo}
          alt="logo"
        />
      </div>
      <p style={{ textAlign: "center" }}>Contacto Screen</p>
    </div>
  );
};

export default Contacto;
