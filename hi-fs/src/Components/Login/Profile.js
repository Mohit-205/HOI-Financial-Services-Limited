import React, { useState } from 'react'
import './Login.css';
import Navbarothers from '../Homepage/Navbarothers';
import topimg from './assets/topimg.svg';
import {useFormik} from 'formik';
import toast, {Toaster} from 'react-hot-toast';
import {profileValidation} from './Validate';
import useFetch from '../Hooks/fetch.hook.js';
import { useAuthStore } from '../../store/store.js';
import { updateUser } from './helper.js';
import { useHistory } from 'react-router-dom';

export default function Register() {

  // const { username } = useAuthStore(state => state.auth)
  const[{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useHistory()

  const formik = useFormik({
    initialValues : {
      firstname: apiData?.firstname || '',
      lastname: apiData?.lastname || '',
      // email: apiData?.email || '',
      phonenumber: apiData?.phonenumber ||'',
      address: apiData?.address ||''
    },
    enableReinitialize: true,
    validate : profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values)
      let updatePromise = updateUser(values);
      toast.promise(updatePromise, {
        loading: 'Updating...',
        success : <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>
      });
      console.log(values)
    }
})
 // logout handler function
 function userLogout(){
  localStorage.removeItem('token');
  navigate.push('/')
}

    if(isLoading) return <h1>isLoading</h1>
    if(serverError) return <h1>{serverError.message}</h1>

  return (
    <>
    <Navbarothers></Navbarothers>
    <Toaster position='top=center' reverseOrder={false}></Toaster>
    <form className='register' onSubmit={formik.handleSubmit}>
      {/* <div className='topimg'>
        <img src={topimg}/>
      </div> */}

      <p className='p1'>Profile</p>

      <div className='reginput'>
        <input {...formik.getFieldProps('firstname')} className='regphone' type='text' placeholder='First Name'></input>
      </div>

      <div className='reginput'>
        <input {...formik.getFieldProps('lastname')} className='reguser' type='text' placeholder='Last Name' size={26}></input>
      </div>

      <div className='reginput'>
        <input {...formik.getFieldProps('phonenumber')} className='regpass' type='text' placeholder='Mobile' size={10}></input>
      </div>

      <div className='reginput'>
        <input {...formik.getFieldProps('address')} className='regpass' type='text' placeholder='Address' size={26}></input>
      </div>

      <div className='gotologin'>
        <span>Come back later?</span><a href="../Login/Login" onClick={userLogout}> Logout</a>
      </div>

      <button type="submit" class="active" id="subotp">Update</button>

      <div className="registerfooter">
        <span>By logging in, I agree to the</span><a> Privacy Policy</a>
      </div>
    </form>
    </>
  )
}
