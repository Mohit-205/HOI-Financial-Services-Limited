import React from 'react';
import './Contact.css';
import Navbarothers from '../Homepage/Navbarothers';
import Footer from '../Homepage/Footer';


const Contact = () => {
    return (
        <div className='contactuspage'>
            <Navbarothers></Navbarothers>            
<div class="contact3 py-5 ">
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.1321367447094!2d72.83165389999999!3d19.1836563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e644765f61%3A0x71571d9b1c898c6e!2sHouse%20of%20Investment!5e0!3m2!1sen!2sin!4v1671805343389!5m2!1sen!2sin" width="650px" height="430px" style={{paddingLeft: "50px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
        <div class="col-lg-5 ml-5">
          <div class="contact-box ml-3">
            <h1 class="font-weight-light mt-2">Quick Contact</h1>
            <form class="mt-6">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="Full Name"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="email" placeholder="Email address"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="Phone Number"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea class="form-control" rows="3" placeholder="Message/Feedback"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card mt-7 border-0 mb-9">
            <div class="row">
              <div class="col-sm">
                <div class="card-body d-flex align-items-center c-detail pl-5">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">321, Ijmima complex,<br/> Link road, 
                       Malad[West],<br/> Mumbai - 400064.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm ml-5">
                <div class="card-body d-flex align-items-center c-detail ml-5 pr-5">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="">022 46018018</p>
                  </div>
                </div>
              </div>
              <div class="col-sm pr-5">
                <div class="card-body d-flex align-items-center c-detail ml-5 mr-4">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Email</h6>
                    <p class="">
                    support@houseofinvestment.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            <Footer></Footer>
        </div>
    )
}

export default Contact