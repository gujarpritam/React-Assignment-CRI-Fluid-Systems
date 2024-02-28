import React from "react";
import Sect from "./Section.module.css";
import Pumpsets from "../../assets/images/pumpsets.png";

function Section() {
  return (
    <div className={Sect.container}>
      <span>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </span>
      <img src={Pumpsets} />
      <span>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </span>
      <div></div>
      <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
      <p>
        CHEMICALS & PROCESS &#124; POWER &#124; WATER WASTE WATER &#124; OILS &
        GAS &#124;PHARMA &#124; SUGARS & DISTILLERIES &#124; PAPER & PULP &#124;
        MARINE & DEFENCE &#124; METAL & MINING &#124; FOOD & BEVERAGE &#124;
        PETROCHEMICAL & REFINERIES &#124; SOLAR &#124; BUILDING &#124; HVAC
        &#124; FIRE FIGHTING &#124; AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
}

export default Section;
