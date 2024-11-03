import React from 'react'
import { Link } from 'react-router-dom'
import tip from '../assets/tip_info.svg';


export default function Q4() {
  return (
    <>
    <div className="text-left mt-0">
      <Link to="/Health/Overview_Q3"><button type="button" className="btn bg-transparent" style={{borderColor: 'transparent'}}>Back</button></Link>
    </div>

    <div className='align-self-left mb-3 mt-3'>
      <b className='fs-5 text'>Did anyone in this plan take any prescribed medicines in the past week?  </b>
    </div>

    <div className="align-self-left d-grid gap-4 col-6">
        <button className="btn" style={{borderColor: 'transparent'}} type="button">No</button>
        <button className="btn" style={{borderColor: 'transparent'}} type="button">Yes</button>
    </div>

    <div className="card flex-row border-0 p-2 mt-3" style={{ width: '26rem', background:'rgb(232, 241, 253)' }}><img className="card-img-left example-card-img-responsive" src={tip} alt='note'/>
      <p className="card-text">You can say <kbd>No</kbd> if the prescribed medicines were vitamins and supplements</p>
    </div>

    <div className="text-left mt-3">
  	  <Link to="/Health/Overview_Q5"><button type="button" class="btn btn-success">Continue</button></Link>
    </div>
    </>
  )
}
