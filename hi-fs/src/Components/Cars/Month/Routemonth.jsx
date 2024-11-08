import React from 'react'
import Month from './Month';
import Header from "../../Header/Header"
import Common from "../Common/Common"
import Dynamic from "../Dynamic/Dynamic"
import style from "../cars.module.css"
import Navbarothers from '../../Homepage/Navbarothers'

function Routemonth() {
    return (
      <div>
        <Navbarothers />
        <Common />
        <div className={style.divflex}>
          <div className={style.flexdiv1}>
         <Month/>
          </div>
          <div className={style.flexdiv2}>
            <Dynamic />
          </div>
        </div>
      </div>
    );
}

export default Routemonth
