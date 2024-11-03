import React, { useEffect } from 'react';
import './Login.css';
import Navbarothers from '../Homepage/Navbarothers';
import Header from '../Header/Header';
import { Link, useHistory } from 'react-router-dom';
import Register from "../Login/Register";
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {usernameValidate} from './Validate';
import { useAuthStore } from '../../store/store.js';

function Login() {

    // const formik = useFormik({
    //     initialValues : {
    //         phonenumber : ''
    //     },
    //     validate : phonenumberValidate,
    //     validateOnBlur: false,
    //     validateOnChange: false,
    //     onSubmit : async values => {console.log(values)}
    // })

    const navigate = useHistory();
    const setUsername = useAuthStore(state => state.setUsername)
    // const username = useAuthStore(state => state.auth.username)

    // useEffect(() => {
    //     console.log(username)
    // })
    const formik = useFormik({
            initialValues : {
                username : ''
            },
            validate : usernameValidate,
            validateOnBlur: false,
            validateOnChange: false,
            onSubmit : async values => {
                // console.log(values)
                setUsername(values.username);
                navigate.push('/Login/Password');
            }
        })

    return (
        <div>
            <Navbarothers></Navbarothers>
            {/*<div id="loginNav">
        <img src="https://d26jdtvx75pfr9.cloudfront.net/media/93672/U-93672-01/templateImages1549452631865_cropped.jpg"/>
    <span class="help">Help</span>
    </div>*/}
    <Toaster position='top=center' reverseOrder={false}></Toaster>
    <form id="loginMain" onSubmit={formik.handleSubmit} >
        <img
            src="https://images.ctfassets.net/uwf0n1j71a7j/1MHWNLCXjBTCj6uyUqZCnx/c20d6e264a0ed57c37b50e9c13eb2c56/Login.png?fm=webp&w=640&q=75"/>
        <p id="p1">Login with your credential</p>
        <p id="p2">Claim, edit or renew your policy</p>

        <div id="mobileNo">
            {/* <div id='mobile_91'>+91</div> */}
            <div id='mobile_input'><input {...formik.getFieldProps('username')} type="tel" id="text" maxlength="30" placeholder='User Name'/></div>
        </div>

        <div id='forgetpassword'>
        <span>Not Registered Yet,</span><a href="../Login/Register"> Register Now</a>
        </div>

        <div id="whatsapp">
            <input type="checkbox" id="check"/><label id="whatsapp_label" for="check">Receive important updates on WhatsApp</label>
        </div>

        <button type="submit" class="active">Let's Go</button>
    </form>

    <div id="loginFooter">
        By logging in, I agree to the <a>Privacy Policy</a>
    </div>
    </div>

        
    )
}
export default Login
