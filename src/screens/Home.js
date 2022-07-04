import logo from "../assets/logo.svg";

const Home = () => {
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
      <p style={{ textAlign: "center" }}>Home Screen</p>
    </div>
  );
};

export default Home;
