import React from 'react';
import { Link } from 'react-router-dom';

export default function Q7() {
  return (
    <>
    <div className="text-left mt-0">
      <Link to="/Health/Overview_Q6"><button type="button" className="btn bg-transparent" style={{borderColor: 'transparent'}}>Back</button></Link>
    </div>

    <div className='align-self-left mb-3 mt-3'>
      <b className='fs-5 text'>Are you or your spouse pregnant?</b>
    </div>

    <div className="align-self-left d-grid gap-4 col-6">
        <button className="btn" style={{borderColor: 'transparent'}} type="button">No</button>
        <button className="btn" style={{borderColor: 'transparent'}} type="button">Yes</button>
    </div>

    <div className="text-left mt-3">
  	  <Link to="/Health/Overview_Q8"><button type="button" class="btn btn-success">Continue</button></Link>
    </div>
    </>
  )
}
