import React from 'react'
import Header from '../../Header/Header';
import Common from '../Common/Common';
import Dynamic from '../Dynamic/Dynamic';
import Pincode from './Pincode';
import style from "../cars.module.css"
import Navbarothers from '../../Homepage/Navbarothers'

function Routepincode() {
    return (
      <div>
        <Navbarothers />
        <Common />
        <div className={style.divflex}>
          <div className={style.flexdiv1}>
          <Pincode/>
          </div>
          <div className={style.flexdiv2}>
            <Dynamic />
          </div>
        </div>
      </div>
    );
}

export default Routepincode
