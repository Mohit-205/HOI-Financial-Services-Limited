import React, { useState } from 'react'
import style from "./pincode.module.css"
import navigation from "./Navigation.svg"
import axios from "axios"
import { Link, useHistory} from 'react-router-dom'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {pincodeValidate} from '../../Login/Validate';

function Pincode() {
const navigate = useHistory();
const formik = useFormik({
  initialValues : {
    pinnumber : ''
  },
  validate : pincodeValidate,
  validateOnBlur: false,
  validateOnChange: false,
  onSubmit : async values => {
    console.log(values);
    navigate.push('/cars/carnumber');}
})

const [pincode,setPincode] = useState("")
    return (
      <div className={style.pincodebody}>
      <Toaster position='top=center' reverseOrder={false}></Toaster>
      <form id="loginMain" onSubmit={formik.handleSubmit} >
        <div 
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "28px",
          }}
        >
          Where do you stay?
        </div>
        <input {...formik.getFieldProps('pinnumber')} style={{
        paddingLeft: "90px"
        }}
          onInput={(e) => {
            setPincode(e.target.value);
          }}
          className={style.pininput}
          placeholder="400034" />
        <p
          style={{
            fontSize: "10px",
            lineHeight: "20px",
            fontWeight: "normal",
            color: "black",
          }}
        >
          Please enter the pincode where your vehicle is currently located
        </p>
        {/* <Link to="/cars/carnumber" > */}
          <div>
            <button
              onClick={async () => {
                const id = localStorage.getItem("ackoid");
                const data = { pincode: pincode };
                await axios.patch(`http://localhost:8000/cars/${id}`, data);
                //  await axios.patch(
                //    `https://acko.herokuapp.com/cars/${id}`,
                //    data
                //  );
              }}
              className={style.pinbtn}
            >
              Continue
            </button>
          </div>
        {/* </Link> */}

        <div className={style.pindivflex}>
          <img src={navigation} alt="" />
          <p
            style={{
              fontWeight: "normal",
              fontSize: "10px",
              alignItems: "center",
              fontStyle: "normal",
              width: "230px",
              marginTop: "13px"
            }}
          >
            Your pincode helps us check our service availability in your region
          </p>
        </div>
        </form>
      </div>
    );
}

export default Pincode
