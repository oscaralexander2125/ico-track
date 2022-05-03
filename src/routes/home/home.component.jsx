import { Outlet } from "react-router-dom";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Outlet />
      <h1 className="hero-text">Find the best metaverse coins in one place!</h1>
    </div>
  );
};

export default Home;
