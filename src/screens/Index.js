import logo from "../assets/logo.svg";

const Index = () => {
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
      <p style={{ textAlign: "center" }}>Index Screen</p>
    </div>
  );
};

export default Index;
