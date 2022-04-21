import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <nav className="nav_container">
      <Link to="/">
        <div className="logo">Logo</div>
      </Link>
      <ul className="nav-items">
        <li className="nav-link-item">
          <Link to="/icos">ICOs</Link>
        </li>
        <li className="nav-link-item">
          <Link to="/watchlist">WatchList</Link>
        </li>
        <li className="nav-link-item">
          <Link to="/auth">Sign In</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};
export default Navigation;
