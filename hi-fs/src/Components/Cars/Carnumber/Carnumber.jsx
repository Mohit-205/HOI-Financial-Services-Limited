import React, { useState } from 'react'
import style from "./carnumber.module.css"
import axios from "axios"
import {Link} from "react-router-dom"

function Carnumber() {

const [number,setNumber]=useState("")

    return (
      <div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "28px",
          }}
        >
          Enter your License number{" "}
        </div>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "12px",
          }}
        >
          This makes your purchase twice as fast
        </p>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className={style.pininput}
          placeholder="HR-0619850034761"
        />
        <Link to="/cars/year" >
         
          <div style={{ marginTop: "15px" }}>
            <button
              onChange={async () => {
                const id = localStorage.getItem("ackoid");
                const data = { number: number };
                await axios.patch(`http://localhost:8000/cars/${id}`, data);
                // await axios.patch(`https://acko.herokuapp.com/cars/${id}`, data);
              }}
              className={style.pinbtn}
            >
              Continue
            </button>
          </div>
        </Link>
      </div>
    );
}

export default Carnumber
