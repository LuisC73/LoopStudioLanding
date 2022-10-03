import images from "../helpers/images";
import { BiMenu } from "react-icons/bi";
import { useRef } from "react";

function Navbar() {
  
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={images.logo} alt="Logo" className="navbar__img" />
        </div>
        <ul className="navbar__ul">
          <li className="navbar__li">About</li>
          <li className="navbar__li">Careers</li>
          <li className="navbar__li">Events</li>
          <li className="navbar__li">Products</li>
          <li className="navbar__li">Support</li>
        </ul>
        <BiMenu className="navbar__button"/>
      </nav>
    </header>
  );
}

export default Navbar;
