import React from 'react';
import review from '../assets/doctor_review.svg';
import tip from '../assets/tip_info.svg';
import back from '../assets/back_arrow.svg';
import { Link } from 'react-router-dom';


export default function Overview() {
  return (
    <>

    <div className="text-left mt-0">
      <Link to="/Health/Quote"><img className="card-img-left example-card-img-responsive" src={back} alt='note' width='6px'/><button type="button" className="btn bg-transparent" style={{textDecoration: 'none'}}>Back</button></Link>
    </div>

    <div className='align-self-center mb-4'>
      <img src={review} alt='review' width='200px'></img>
    </div>

    <div className='align-self-left mb-3'>
      <p className='fs-6 text mb-0'>Before we proceed,</p>
      <b className='fs-5 text'>Answer a few questions to help us better understand your family's health</b>
    </div>

    {/* <Card className='' style={{ width: '23rem', background:'rgb(232, 241, 253)' }}>
      <Card.Body className='p-3'>
        <img src={tip} alt='tip'></img>
        <p class="card-text">Ensure your answers are accurate, to avoid possible claim rejections.</p>
      </Card.Body>
    </Card> */}

    <div className="card flex-row border-0 p-2" style={{ width: '26rem', background:'rgb(232, 241, 253)' }}><img className="card-img-left example-card-img-responsive" src={tip} alt='note'/>
      <p className="card-text">Ensure your answers are accurate, to avoid possible claim rejections.</p>
    </div>

    <div className="text-left mt-3">
  	  <Link to="/Health/Overview_Q1"><button type="button" class="btn btn-success">Continue</button></Link>
    </div>

    <p className='mt-2 mb-0' style={{fontSize: '12px'}}>Your personal info is safe with us. We <kbd>never</kbd> share it with anyone else.</p>

    </>
  )
}
