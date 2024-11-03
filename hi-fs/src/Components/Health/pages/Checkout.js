import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default function Checkout() {
  return (
    <>
    <div className='align-self-left mb-3 mt-3'>
      <b className='fs-3 text'>Almost there!</b>
      <p><b className='fs-3 text'>Just a few more details</b></p>
    </div>

    <form>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput"/>
      <label for="floatingInput">Full Name</label>
    </div>

    <div class="form-row">
    <div class="form-group col-md-6">
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Your Martial Status</option>
        <option value="1">Single</option>
        <option value="2">Married</option>
        <option value="3">Widowed</option>
        <option value="4">Divorced</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Others</option>
      </select>
    </div>
    </div>
</form>

    <div className="text-left mt-3">
      <a href='https://buy.stripe.com/test_eVa02L6ud0nE1EcfZ1'><button type="button" class="btn btn-success" id="btn">Continue</button></a>
    </div>
    </>
  )
}

