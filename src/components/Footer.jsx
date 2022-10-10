import images from "../helpers/images";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { BsPinterest, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img src={images.logo} alt="logo" className="footer__img" />
        <div className="footer__social">
          <AiFillFacebook className="footer__icon" />
          <AiFillTwitterSquare className="footer__icon" />
          <BsPinterest className="footer__icon" />
          <BsInstagram className="footer__icon" />
        </div>
      </div>
      <div className="footer__bottom">
        <ul className="footer__ul">
          <li className="footer__li">About</li>
          <li className="footer__li">Careers</li>
          <li className="footer__li">Events</li>
          <li className="footer__li">Products</li>
          <li className="footer__li">Support</li>
        </ul>
        <p className="footer__p">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
