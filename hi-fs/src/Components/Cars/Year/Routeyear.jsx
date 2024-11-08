import React from "react";
import Year from "./Year";
import Header from "../../Header/Header";
import Common from "../Common/Common";
import Dynamic from "../Dynamic/Dynamic";
import style from "../cars.module.css";
import Navbarothers from '../../Homepage/Navbarothers'

function Routeyear() {
  return (
    <div>
      <Navbarothers />
      <Common />
      <div className={style.divflex}>
        <div className={style.flexdiv1}>
          <Year />
        </div>
        <div className={style.flexdiv2}>
          <Dynamic />
        </div>
      </div>
    </div>
  );
}

export default Routeyear;
