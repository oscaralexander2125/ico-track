import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
import { Fragment } from "react";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
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
          {currentUser ? (
            <li className="nav-link-item">
              <span className="sign-out-button" onClick={signOutUser}>
                Sign Out
              </span>
            </li>
          ) : (
            <li className="nav-link-item">
              <Link to="/auth">Sign In</Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
