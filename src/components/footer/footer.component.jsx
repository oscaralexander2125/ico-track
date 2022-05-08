import { Outlet } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <Outlet />
      <div className="footer">Created Intently by Oscar A. Reyes</div>
    </div>
  );
};

export default Footer;
