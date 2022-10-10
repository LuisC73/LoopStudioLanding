import images from "../helpers/images";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={images.logo} alt="Logo" className="navbar__img" />
        </div>
        <ul className={`navbar__ul ${menu ? "navbar__ul--active" : ""}`}>
          <li className="navbar__top">
            <ul className="navbar__content">
              <li>
                <img src={images.logo} alt="Logo" className="navbar__img" />
              </li>
              <li>
                <BiX
                  className="navbar__button"
                  onClick={() => setMenu(!menu)}
                />
              </li>
            </ul>
          </li>
          <li className="navbar__li">About</li>
          <li className="navbar__li">Careers</li>
          <li className="navbar__li">Events</li>
          <li className="navbar__li">Products</li>
          <li className="navbar__li">Support</li>
        </ul>
        <BiMenu className="navbar__button" onClick={() => setMenu(!menu)} />
      </nav>
    </header>
  );
}

export default Navbar;
