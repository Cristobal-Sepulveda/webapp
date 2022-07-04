import logo from "../assets/logo.svg";

const QuienesSomos = () => {
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
      <p style={{ textAlign: "center" }}>Quienes Somos Screen</p>
    </div>
  );
};

export default QuienesSomos;
