import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  color: white;
  letter-spacing: 3px;
  font-weight: 700;
  text-decoration: none;
  font-style: oblique;
  font-size: 1.15em;
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  text-align: right;
  flex-wrap: wrap;
  padding: 0px 10px 3px;
  z-index: 5;
  box-shadow: 0px 5px 4px #000000ab;
  @media only screen and (max-width: 439px) {
    justify-content: space-around;
    flex-direction: column;
    text-align: left;
  }
`;

export const NavLinkItem = styled.li`
  padding: 10px 20px;
  @media only screen and (max-width: 439px) {
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

export const SignOutButton = styled.span`
  cursor: pointer;
  font-size: 1.1em;
  &:hover {
    color: #07a3e3;
  }
`;

export const Push = styled(NavLinkItem)`
  margin-right: auto;
  @media only screen and (max-width: 439px) {
    padding-bottom: 16px;
    display: block;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.1em;
  text-decoration: none;
  color: whitesmoke;
  &:hover {
    color: #07a3e3;
  }
`;

export const HamburgerIcon = styled.div`
  width: 35px;
  height: 5px;
  background-color: #e8f2ff;
  margin: 6px 0;
  z-index: 7;
  position: absolute;
  right: 12px;
  display: none;
  @media only screen and (max-width: 439px) {
    display: block;
  }
`;

export const HamburgerIconLine1 = styled(HamburgerIcon)`
  top: 18px;
  transform: ${({ open }) =>
    open ? "rotate(45deg) translate(8px, 8px)" : "rotate(0)"};
`;

export const HamburgerIconLine2 = styled(HamburgerIcon)`
  top: 29px;
  display: ${({ open }) => (open ? "none" : "block")};
`;
export const HamburgerIconLine3 = styled(HamburgerIcon)`
  top: 40px;
  transform: ${({ open }) =>
    open ? "rotate(-45deg) translate(8px, -7.5px)" : "rotate(0)"};
`;

export const HamburgerMenuDiv = styled.div`
  position: absolute;
  top: -16px;
  right: 10px;
  height: 62px;
  width: 60px;
  display: none;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 439px) {
    display: block;
  }
`;
// .nav-container {
//   .nav-items {
//     display: flex;
//     list-style: none;
//     justify-content: flex-end;
//     text-align: right;
//     flex-wrap: wrap;
//     padding: 0 10px;

//     .nav-link-item {
//       padding: 10px 20px;
//     }

//     .push {
//       margin-right: auto;
//     }

//     .sign-out-button {
//       cursor: pointer;
//     }
//   }

// }
