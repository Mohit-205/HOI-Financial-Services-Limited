import React, { useState } from 'react'
import Header from '../../Header/Header';
import style from "../cars.module.css"
import Common from '../Common/Common';
import Dynamic from '../Dynamic/Dynamic';
import Ncbpopup from '../Ncbpopup/Ncbpopup';
import Policy from './Policy';
import Navbarothers from "../../Homepage/Navbarothers";

function Routepolicy() {

  const [popupp, setpopupp] = useState(false);

    return (
      <div>
        <Navbarothers/>
        <Common />
        <div className={style.divflex}>
          <div className={style.flexdiv1}>
           <Policy setpopupp={setpopupp} />
          </div>
          <div className={style.flexdiv2}>
            <Dynamic />
          </div>
        </div>
        <Ncbpopup popupp={popupp} setpopupp={setpopupp} />
      </div>
    );
}

export default Routepolicy
