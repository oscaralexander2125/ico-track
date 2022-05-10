import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavItems,
  NavLinkItem,
  SignOutButton,
  Push,
  NavLink,
  HamburgerIconLine1,
  HamburgerIconLine2,
  HamburgerIconLine3,
  HamburgerMenuDiv,
  Logo,
} from "./navigation.styles.js";
import { Fragment, useState } from "react";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <nav className="nav-container">
        <HamburgerMenuDiv onClick={toggleMenu}>
          <HamburgerIconLine1 open={isOpen}></HamburgerIconLine1>
          <HamburgerIconLine2 open={isOpen}></HamburgerIconLine2>
          <HamburgerIconLine3 open={isOpen}></HamburgerIconLine3>
        </HamburgerMenuDiv>
        <NavItems>
          <Push>
            <Logo to="/">
              <div className="logo">WL</div>
            </Logo>
          </Push>
          <NavLinkItem open={isOpen}>
            <NavLink to="/icos">ICOs</NavLink>
          </NavLinkItem>
          <NavLinkItem open={isOpen}>
            <NavLink to="/watchlist">WatchList</NavLink>
          </NavLinkItem>
          {currentUser ? (
            <NavLinkItem open={isOpen}>
              <SignOutButton onClick={signOutUser}>Sign Out</SignOutButton>
            </NavLinkItem>
          ) : (
            <NavLinkItem open={isOpen}>
              <NavLink to="/auth">Sign In</NavLink>
            </NavLinkItem>
          )}
        </NavItems>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
