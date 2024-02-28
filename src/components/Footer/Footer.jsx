import React from "react";
import FooterStyle from "./Footer.module.css";
import Contact from "../../assets/images/contact.png";
import Facebook from "../../assets/images/facebook.png";
import Globe from "../../assets/images/globe.png";

function Footer() {
  return (
    <div className={FooterStyle.container}>
      <div>
        <img src={Contact} />
        <span>Toll free 1800 200 1234</span>
      </div>
      <div>
        <img src={Facebook} />
        <span>www.facebook.com/cripumps</span>
      </div>
      <div>
        <img src={Globe} />
        <span>www.crigroups.com</span>
      </div>
    </div>
  );
}

export default Footer;
