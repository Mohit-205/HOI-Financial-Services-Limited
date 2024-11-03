import React from 'react';
import { Link } from 'react-router-dom';

export default function Q9() {
  return (
    <>
    <div className="text-left mt-0">
      <Link to="/Health/Overview_Q8"><button type="button" className="btn bg-transparent" style={{borderColor: 'transparent'}}>Back</button></Link>
    </div>

    <div className='align-self-left mb-3 mt-3'>
      <b className='fs-5 text'>Explain the health issues or symptoms. Eg.leukemia, etc</b>
    </div>

    <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Type Here' rows="3" ></textarea>
    </div>

    <div className="text-left mt-3">
  	  <Link to="/Health/Checkout"><button type="button" class="btn btn-success">Continue</button></Link>
    </div>
    </>
  )
}
