import React,{useState} from 'react';
import './Login.css';
import Navbarothers from '../Homepage/Navbarothers';
import Header from '../Header/Header';
import { Link ,useHistory} from 'react-router-dom';
import Register from "../Login/Register";
import toast, {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {passwordValidate} from './Validate'; 
import useFetch from '../Hooks/fetch.hook.js';
import { useAuthStore } from '../../store/store.js';
import { verifyPassword } from './helper.js';

function Password() {

    const navigate = useHistory()
    const [isOpen, setOpen] = useState(false);
    const { username } = useAuthStore(state => state.auth)
    const[{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`)

    const formik = useFormik({
            initialValues : {
                password : ''
            },
            validate : passwordValidate,
            validateOnBlur: false,
            validateOnChange: false,
            onSubmit : async values => {
                // console.log(values)
                let loginPromise = verifyPassword({username, password : values.password})
                toast.promise(loginPromise, {
                    loading: 'Checking...',
                    success : <b>Login Successfully...!</b>,
                    error : <b>Password Not Match!</b>
                  });

                  loginPromise.then(res => {
                    let { token } = res.data;
                    localStorage.setItem('token', token);
                    navigate.push('/Login/Profile')
                  })
            }
        })

        if(isLoading) return <h1>isLoading</h1>
        if(serverError) return <h1>{serverError.message}</h1>

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
        <p style={{width: "400px"}} id="p1">{apiData?.firstname || apiData?.username}, Login with your credential</p>
        <p id="p2">Claim, edit or renew your policy</p>

        <div id="mobileNo">
            {/* <div id='mobile_91'>+91</div> */}
            <div id='mobile_input'><input {...formik.getFieldProps('password')} type="tel" id="text" maxlength="30" placeholder='Password'/></div>
        </div>

        <div id='forgetpassword'>
        <span>Forget Password ?</span><a href="../Login/Recovery"> Recover Now</a>
        </div>

        <div id="whatsapp">
            <input type="checkbox" id="check"/><label id="whatsapp_label" for="check">Receive important updates on WhatsApp</label>
        </div>

        <button type="submit" class="active" id="subotp">Log In</button>
    </form>

    <div id="loginFooter">
        By logging in, I agree to the <a>Privacy Policy</a>
    </div>
    </div>

        
    )
}
export default Password
