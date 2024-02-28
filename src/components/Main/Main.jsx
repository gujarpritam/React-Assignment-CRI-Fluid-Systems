import React from "react";
import MainStyle from "./Main.module.css";
import Award from "../../assets/images/award.png";
import Logo from "../../assets/images/logo.png";
import Felicitation from "../../assets/images/felicitation.png";

function Main() {
  return (
    <div className={MainStyle.mainContainer}>
      <img className={MainStyle.award} src={Award} />

      <div className={MainStyle.info}>
        <img src={Logo} />

        <strong>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </strong>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src={Felicitation} />
        <span>
          Government of India has awarded the{" "}
          <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
          Selvaraj, Joint Managing Director of C.R.I. Group received the award
          from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
          Singh, Honorable Minister of State.
        </span>
      </div>
    </div>
  );
}

export default Main;
