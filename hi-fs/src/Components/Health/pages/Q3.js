import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Q3.css';
// import back from '../assets/back_arrow.svg';


export default function Overview_Q3() {
    
  return (
    <>
    <div className="text-left mt-0">
      <Link to="/Health/Overview_Q2"><button type="button" className="btn bg-transparent" style={{borderColor: 'transparent'}}>Back</button></Link>
    </div>

    <div className='align-self-left mb-3 mt-3'>
      <b className='fs-5 text'>Has anyone in this plan been diagnosed with a medical condition?</b>
    </div>

    <div class="container">
        <div class="row mt-2">
            <div class="col form-check">
                <label>
                    <input type="checkbox" style={{background: 'rgb(240, 240, 240)'}} name="demo" class="card-input-element d-none form-check-input" id="demo1"/>
                    <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center" style={{color: 'black'}}>
                    Vitamin deficiency
                    </div>
                </label>
                <label class="mt-0">
                    <input type="checkbox" name="demo" class="card-input-element d-none form-check-input" value="demo2"/>
                    <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center" style={{color: 'black'}}>
                    Asthma
                    </div>
                </label>
                <label class="mt-0">
                    <input type="checkbox" name="demo" class="card-input-element d-none" value="demo2"/>
                    <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center" style={{color: 'black'}}>
                    Hypothyroid / Hyperthyroid
                    </div>
                </label>
                <label class="mt-0">
                    <input type="checkbox" name="demo" class="card-input-element d-none" value="demo2"/>
                    <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center" style={{color: 'black'}}>
                    High blood pressure
                    </div>
                </label>
                <label class="mt-0">
                    <input type="checkbox" name="demo" class="card-input-element d-none" value="demo2"/>
                    <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center" style={{color: 'black'}}>
                    Heart disease
                    </div>
                </label>
                <label class="mt-0">
                    <input type="checkbox" name="demo" class="card-input-element d-none" value="demo2"/>
                    <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center" style={{color: 'black'}}>
                    Diabetes
                    </div>
                </label>
                <label class="mt-0">
                    <input type="checkbox" name="demo" class="card-input-element d-none" value="demo2"/>
                    <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center" style={{color: 'black'}}>
                    Other medical condition
                    </div>
                </label>
                <label class="mt-0">
                    <input type="checkbox" name="demo" class="card-input-element d-none" value="demo2"/>
                    <div class="card card-body bg-light d-flex flex-row justify-content-between align-items-center" style={{color: 'black'}}>
                    No medical condition
                    </div>
                </label>

                <div className="text-left mt-3">
                    <Link to="/Health/Overview_Q4"><button type="button" class="btn btn-success">Continue</button></Link>
                </div>

      </div>
    </div>
  </div>
  </>

  )
}
