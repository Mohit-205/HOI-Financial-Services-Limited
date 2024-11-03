import React, { useEffect, useState } from 'react';
import './Login.css';
import recovery from "./assets/recovery.svg"
import Navbarothers from '../Homepage/Navbarothers';
import Header from '../Header/Header';
import { Link, useHistory } from 'react-router-dom';
import Register from "../Login/Register";
import toast, {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
// import {phonenumberValidate} from './Validate';
import { useAuthStore } from '../../store/store.js';
import { generateOTP, verifyOTP } from './helper.js';

function Recovery() {

    const { username } = useAuthStore(state => state.auth);
    const { OTP, setOTP} = useState();
    const navigate = useHistory()

    useEffect(() => {
        generateOTP(username).then((OTP) => {
            console.log(OTP);
            if(OTP) return toast.success("OTP has been send to your email!");
            return toast.error("Problem while generating OTP!")
        })
    }, [username]);


    async function onSubmit(e){
        e.preventDefault();
        try {
          let { status } = await verifyOTP({ username, code : OTP })
          if(status === 201){
            toast.success('Verify Successfully!')
            return navigate.push('/Login/Reset')
          }  
        } catch (error) {
          return toast.error('Wrong OTP! Check email again!')
        }
      }
      

    // handler of resend OTP
  function resendOTP(){

    let sentPromise = generateOTP(username);

    toast.promise(sentPromise ,
      {
        loading: 'Sending...',
        success: <b>OTP has been send to your email!</b>,
        error: <b>Could not Send it!</b>,
      }
    );

    sentPromise.then((OTP) => {
      console.log(OTP)
    });
    
  }

    return (
        <div>
            <Navbarothers></Navbarothers>
            {/*<div id="loginNav">
        <img src="https://d26jdtvx75pfr9.cloudfront.net/media/93672/U-93672-01/templateImages1549452631865_cropped.jpg"/>
    <span class="help">Help</span>
    </div>*/}
    <Toaster position='top=center' reverseOrder={false}></Toaster>
    <form id="loginMain" onSubmit={onSubmit}>
    <img src={recovery} alt='recoveryimg' />
        <p id="p2">Recover my account</p>
        <p id="p3">Enter 6 digit OTP to recover password</p>

        <div id="mobileNoemail">
            <div id='mobile_input'><input onChange={(e) => setOTP(e.target.value)} type="tel" id="number" placeholder='OTP' maxLength={6}/></div>
        </div>

        
        <div id="whatsapp">
            <input type="checkbox" id="check"/><label id="whatsapp_label" for="check">Receive important updates on WhatsApp</label>
        </div>

        <button type="submit" class="active" id="subotp">Continue</button>
    </form>

    <div id='forgetpassword'>
        <span>Can't get OTP?</span><a onClick={resendOTP} > Resend</a>
        </div>


    
    </div>

        
    )
}
export default Recovery;
