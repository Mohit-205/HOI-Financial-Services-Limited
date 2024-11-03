import React, {useEffect} from 'react';
import './Login.css';
import Navbarothers from '../Homepage/Navbarothers';
import recovery from "./assets/recovery.svg"
import Header from '../Header/Header';
import { Link, useHistory, Redirect } from 'react-router-dom';
import Register from "../Login/Register";
import toast, {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {resetPasswordValidation} from './Validate'; 
import { resetPassword } from './helper';
import { useAuthStore } from '../../store/store'
import useFetch from '../Hooks/fetch.hook'

function Reset() {

    const {username} = useAuthStore(state => state.auth)
    const navigate = useHistory()
    const [{ isLoading, apiData, status, serverError }] = useFetch('createResetSession')

    useEffect(() => {
        console.log(apiData)
      })

    const formik = useFormik({
            initialValues : {
                password : '',
                confirm_pwd : ''
            },
            validate : resetPasswordValidation,
            validateOnBlur: false,
            validateOnChange: false,
            onSubmit : async values => {
                let resetPromise = resetPassword({ username, password: values.password })
                toast.promise(resetPromise, {
                    loading: 'Updating...',
                    success: <b>Reset Successfully...!</b>,
                    error : <b>Could not Reset!</b>
                });
                resetPromise.then(function(){navigate.push('/password')})
            }
        })

        if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
        if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>
        if(status && status !== 201) return <Redirect to={'/password'} replace={true}></Redirect>
        
        

    return (
        <div>
            <Navbarothers></Navbarothers>
            {/*<div id="loginNav">
        <img src="https://d26jdtvx75pfr9.cloudfront.net/media/93672/U-93672-01/templateImages1549452631865_cropped.jpg"/>
    <span class="help">Help</span>
    </div>*/}
    <Toaster position='top=center' reverseOrder={false}></Toaster>
    <form id="loginMain" onSubmit={formik.handleSubmit} >
    <img src={recovery} alt='recoveryimg' />
        <p id="p1">Login with your credential</p>
        <p id="p2">Claim, edit or renew your policy</p>

        <div id="mobileNo">
            {/* <div id='mobile_91'>+91</div> */}
            <div id='mobile_input'><input {...formik.getFieldProps('password')} type="tel" id="text" maxlength="30" placeholder='New Password'/></div>
            <div id='mobile_input'><input {...formik.getFieldProps('confirm_pwd')} type="tel" id="text" maxlength="30" placeholder='Repeat Password'/></div>
        </div>

        <div id='forgetpassword'>
        <span>Forget Password ?</span><a href="../Login/Recovery"> Recover Now</a>
        </div>

        <div id="whatsapp">
            <input type="checkbox" id="check"/><label id="whatsapp_label" for="check">Receive important updates on WhatsApp</label>
        </div>

        <button type="submit" class="active" id="subotp">Reset</button>
    </form>

    <div id="loginFooter">
        By logging in, I agree to the <a>Privacy Policy</a>
    </div>
    </div>

        
    )
}
export default Reset
