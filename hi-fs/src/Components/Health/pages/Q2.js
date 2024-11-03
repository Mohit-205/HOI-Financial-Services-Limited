import React from 'react';
import { Link } from 'react-router-dom';
// import back from '../assets/back_arrow.svg';


export default function Q2() {
  return (
    <>
    <div className="text-left mt-0">
      <Link to="/Health/Overview_Q1"><button type="button" className="btn bg-transparent" style={{borderColor: 'transparent'}}>Back</button></Link>
    </div>

    <div className='align-self-left mb-3 mt-3'>
      <b className='fs-5 text'>Has anyone covered in this plan consumed alcohol in the past year?</b>
    </div>

    <div className="align-self-left d-grid gap-4 col-6">
        <button className="btn" style={{borderColor: 'transparent'}} type="button">No</button>
        <button className="btn" style={{borderColor: 'transparent'}} type="button">Yes, everyday</button>
        <button className="btn" style={{borderColor: 'transparent'}} type="button">Yes, atleast 3-4 times a week</button>
        <button className="btn" style={{borderColor: 'transparent'}} type="button">Yes, a few times a year</button>
    </div>

    <div className="text-left mt-3">
  	  <Link to="/Health/Overview_Q3"><button type="button" class="btn btn-success">Continue</button></Link>
    </div>

    </>
  )
}
