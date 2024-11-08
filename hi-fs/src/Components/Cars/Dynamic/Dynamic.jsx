import React, { useEffect, useState } from "react";
import style from "./dynamic.module.css";
import axios from "axios";
import {Link} from "react-router-dom"
import buttonpen from "./Button pen.svg";
import calender from "./Cal.svg";
import car from "./car.svg";
import date from "./Date.svg";
import location from "./Location.svg";
import phone from "./phon.svg"


function Dynamic() {
  const id = localStorage.getItem("ackoid");

  const [dataaa, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [dataaa]);
  console.log(dataaa);
  console.log(id);
  const getData = async () => {
       const { data } = await axios.get(`http://localhost:8000/cars/${id}`);
      //  const { data } = await axios.get(`https://acko.herokuapp.com/cars/${id}`);
    setData([data]);
  };

  return (
    <div className={style.dynamicbody}>
      {dataaa.map((e) => (
        <div className={style.dynamicsecbody} key={e._id}>
          {e.useofcar && (
            <div>
              <img className={style.img11} src={car} alt="" />
              <p>{e.useofcar}</p>

              <Link className={style.link} to="/cars/useofcar">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}

          {e.number && (
            <div>
              <img className={style.img11} src={car} alt="" />
              <p>{e.number}</p>

              <Link className={style.link} to="/cars/carnumber">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}

          {e.pincode && (
            <div>
              <img className={style.img11} src={location} alt="" />
              <p>{e.pincode}</p>
              <Link className={style.link} to="/cars/pincode">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}

          {e.name && (
            <div>
              <img className={style.img11} src={car} alt="" />
              <p>{e.name}</p>
              <Link className={style.link} to="/cars/cartype">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}

          {e.oddate && (
            <div>
              <img className={style.img11} src={date} alt="" />
              <p>OD Expiry- {e.oddate}</p>
              <Link to="/cars/expiry">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}

          {e.tpdate && (
            <div>
              <img className={style.img11} src={date} alt="" />
              <p>TP Expiry- {e.tpdate}</p>
              <Link to="/cars/expiry">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}

          {e.year && (
            <div>
              <img className={style.img11} src={calender} alt="" />
              <p>Registration Year -{e.year}</p>
              <Link to="/cars/year">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}

          {e.month && (
            <div>
              <img className={style.img11} src={calender} alt="" />
              <p>Registration Month -{e.month}</p>
              <Link to="/cars/month">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}

          {e.mobile && (
            <div>
              <img
                style={{ width: "15px" }}
                className={style.img11}
                src={phone}
                alt=""
              />
              <p>Mobile -{e.mobile}</p>
              <Link to="/cars/cardetail">
                <img className={style.img22} src={buttonpen} alt="" />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dynamic;
