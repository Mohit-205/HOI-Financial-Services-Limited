import React from 'react'
import './Login.css';
import Navbarothers from '../Homepage/Navbarothers';
import topimg from './assets/topimg.svg';
import {useFormik} from 'formik';
import toast, { Toaster} from 'react-hot-toast';
import {registerValidation, usernameValidate} from './Validate';
import { registerUser } from './helper.js';
import { useHistory } from 'react-router-dom';

export default function Register() {

  const navigate = useHistory()
  const formik = useFormik({
    initialValues : {
      email: '',
      username: '',
      password : ''
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values)
      let registerPromise = registerUser(values)
      toast.promise(registerPromise, {
          loading: 'Creating...',
          success : <b>Register Successfully...!</b>,
          error : <b>Could not Register.</b>
      })
      // console.log(values)
      registerPromise.then(function(){ navigate.push('/Login/Login')});
    }
})

  return (
    <>
    <Navbarothers></Navbarothers>
    <Toaster position='top=center' reverseOrder={false}></Toaster>
    <form className='register' onSubmit={formik.handleSubmit}>
      <div className='topimg'>
        <img src={topimg}/>
      </div>

      <p className='p1'>Get started today</p>

      <div className='reginput'>
        <input {...formik.getFieldProps('email')} className='regphone' type='email' placeholder='Email' size={28}></input>
      </div>

      <div className='reginput'>
        <input {...formik.getFieldProps('username')} className='reguser' type='text' placeholder='User Name' size={26}></input>
      </div>

      <div className='reginput'>
        <input {...formik.getFieldProps('password')} className='regpass' type='password' placeholder='Password' size={26}></input>
      </div>

      <div className='gotologin'>
        <span>Already have an account?</span><a href="../Login/Login"> Login</a>
      </div>

      <button type="submit" class="active" id="subotp">Sign up</button>

      <div className="registerfooter">
        <span>By logging in, I agree to the</span><a> Privacy Policy</a>
      </div>
    </form>
    </>
  )
}
