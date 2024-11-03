import React, { useState } from "react";
import style from "./typecarpopup.module.css";
import search from "./Search.svg";

function Typecarpopup({ setCarpopup, carpopup, setCar }) {
  const [value, setValue] = useState("");
  return carpopup ? (
    <div className={style.typecarpopup}>
      {/* <div className={style.inputflexdiv}>
        <img src={search} alt="" />
        <input value={value} type="text" placeholder="Search your car" />
      </div>
      <div className={style.topsearch}>Top search results</div> */}
      <select
        style={{ width: "100%", cursor: "pointer" }}
        onChange={(e) => {
          setValue(e.target.value);
          setCar(e.target.value);
          setCarpopup(false);
        }}
      >
        <option value="Maruti Suzuki Swift">Maruti Suzuki Swift</option>
        <option value="Maruti Suzuki Brezza">Maruti Suzuki Brezza</option>
        <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga</option>
        <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire</option>
        <option value="Maruti Suzuki Wagon R">Maruti Suzuki Wagon R</option>
        <option value="Tata Nexon">Tata Nexon</option>
        <option value="Tata Harrier">Tata Harrier</option>
        <option value="Ford Ecosport">Ford Ecosport</option>
        <option value="Ford Endeavour">Ford Endeavour</option>
        <option value="Honda City">Honda City</option>
        <option value="Honda Amaze">Honda Amaze</option>
      </select>
    </div>
  ) : (
    ""
  );
}

export default Typecarpopup;
