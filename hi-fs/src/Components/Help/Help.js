import React from 'react';
import { Link } from 'react-router-dom';
import Navbarothers from '../Homepage/Navbarothers.js';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Carpolicybuy from './Pages/Carpolicybuy.js';

export default function Help() {
  return (
    <>
    <Navbarothers></Navbarothers>
    <div class="bg-light">
      <div class="container py-3"><p className="h4">Help & Support</p> <p class="fs-6">Popular Topics</p>
        <div class="row h-100 align-items-center py-3">
          <div class="col-lg-12">
            <div className="d-grid gap-2">
              <Button variant="light" size="lg" style={{backgroundColor: 'white'}} href='/Help/Carpolicybuy'>How do I buy a policy for my car?</Button>
              <Button variant="light" size="lg" style={{backgroundColor: 'white'}} href='/Help/Carpolicydetail'>How can I change details in my car policy?</Button>
              <Button variant="light" size="lg" style={{backgroundColor: 'white'}} href='/Help/Healthpolicybuy'>How do I buy a Health Insurance Policy?</Button>
              <Button variant="light" size="lg" style={{backgroundColor: 'white'}} href='/Help/Healthpolicydetail'>How do I change details in my Health Insurance Policy?</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
