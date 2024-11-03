import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Homepage/Home";
import Errorpage from "../Components/Homepage/Errorpage";
import About from "../Components/Aboutus/About";
import Contact from "../Components/Contactus/Contact";
import Help from '../Components/Help/Help'
import Carpolicybuy from "../Components/Help/Pages/Carpolicybuy";
import Carpolicydetail from "../Components/Help/Pages/Carpolicydetail";
import Healthpolicybuy from "../Components/Help/Pages/Healthpolicybuy";
import Healthpolicydetail from "../Components/Help/Pages/Healthpolicydetail";
import News from '../Components/Homepage/news.js'
import Login from "../Components/Login/Login";
// import OTP from "../Components/Login/OTP";
//import Newfeed from "../Components/Newfeed/Newsfeed";
//import Navbar from "../Components/Homepage/Navbar";
// import Username from "../Components/Login/Username";
import Register from "../Components/Login/Register";
import Password from "../Components/Login/Password";
import Profile from "../Components/Login/Profile";
import Recovery from "../Components/Login/Recovery";
import Reset from "../Components/Login/Reset";
  
import Routecardetail from "../Components/Cars/Cardetail/Routecardetail";
import Routeuseofcar from "../Components/Cars/Useofcar/Routeuseofcar";
import Routepincode from "../Components/Cars/Pincode/Routepincode";
import Routecarnumber from "../Components/Cars/Carnumber/Routecarnumber";
import Routeyear from "../Components/Cars/Year/Routeyear";
import Routemonth from "../Components/Cars/Month/Routemonth";
import Routecartype from "../Components/Cars/Cartype/Routecartype";
import Routeexpiry from "../Components/Cars/Expirydate/Routeexpiry";
import Routepolicy from "../Components/Cars/Lastpolicy/Routepolicy";
import { DifferentPlanOptions } from "../Components/PlanOptions/DiffPlanOptions";
import { AdditionalCovers } from "../Components/PlanOptions/AdditionalCovers";
import { AdditionalCovers1 } from "../Components/PlanOptions/AdditionalCovers1";
import { AdditionalCovers2 } from "../Components/PlanOptions/AdditionalCovers2";
import { AddtionalDetails } from "../Components/AddtionalDetails/AddtionalDetails";
import { FinalDetails } from "../Components/FinalDetails/FinalDetails";
import Paysuccessfull from "../Components/Paysuccessfull/Paysuccessfull";
import { CardPayment } from "../Components/payment/CardPayment";

// import GetQuote from "../Components/Health/Quote/GetQuote";
import Health from '../Components/Health/Health.js'
// import Components from '../Components/Health/pages/Components.js';

import { AuthorizeUser, ProtectRoute } from "../Components/middleware/auth";

// health modules

// import Quote from "../Components/Health/pages/quote.js";

{/*
import Routecarnumber from "../components/Cars/Carnumber/Routecarnumber";


*/}



//import Paysuccessfull from "../components/Paysuccessfull/Paysuccessfull";
//import { CardPayment } from "../components/payment/CardPayment";
function Routes() {
  return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path='/' element={<Home/>} /> */}

        <Route path="/The New York Times" exact>
          <News/>
        </Route>

        <Route path="/Login/Login" exact>
          <Login />
        </Route>
        {/* <Route path='/Login/Login' element={<Login/>} /> */}

        {/* <Route path="/Login/OTP" exact>
          <OTP/>
        </Route> */}

        {/* <Route path="/Login/Username" exact>
          <Username/>
        </Route> */}
        
        <Route path="/Login/Register" exact>
          <Register/>
        </Route>

        <Route path="/Login/Password" exact>
          <ProtectRoute><Password/></ProtectRoute>
          {/* <Password/> */}
        </Route>

        <Route path="/Login/Profile" exact>
          <AuthorizeUser><Profile/></AuthorizeUser>
          {/* <Profile/> */}
        </Route>

        <Route path="/Login/Recovery" exact>
          <Recovery/>
        </Route>

        <Route path="/Login/Reset" exact>
          <Reset/>
        </Route>


        <Route path="/cars/useofcar" exact>
          <Routeuseofcar />
        </Route>

        <Route path="/cars/pincode" exact>
          <Routepincode />
        </Route>


        <Route path="/cars/carnumber" exact>
          <Routecarnumber />
        </Route>

        <Route path="/cars/year" exact>
          <Routeyear />
        </Route>

        <Route path="/cars/month" exact>
          <Routemonth />
        </Route>

        <Route path="/cars/cartype" exact>
          <Routecartype />
        </Route>

        <Route path="/cars/cardetail" exact>
          <Routecardetail />
        </Route>

        <Route path="/cars/expiry" exact>
          <Routeexpiry />
        </Route>

        <Route path="/cars/policy" exact>
          <Routepolicy />
        </Route>

        
        <Route path="/plans">
          <DifferentPlanOptions></DifferentPlanOptions>
        </Route>

        <Route path="/additionalCovers">
          <AdditionalCovers></AdditionalCovers>
        </Route>

        <Route path="/additionalCovers1">
          <AdditionalCovers1></AdditionalCovers1>
        </Route>

        <Route path="/additionalCovers2">
          <AdditionalCovers2></AdditionalCovers2>
        </Route>

        <Route path="/addtional-details">
          <AddtionalDetails />
        </Route>

        <Route path="/final-details">
          <FinalDetails />
        </Route>

        <Route path="/cardPayment" exact>
          <CardPayment />
        </Route>

        <Route path="/successfull" exact>
          <Paysuccessfull />
        </Route>
 

        <Route path="/Aboutus/About" exact>
          <About />
        </Route>

        {/*<Route path="/Newfeed/Newsfeed" exact>
          <Newfeed />
</Route>*/}

        <Route path="/Contactus/Contact" exact>
          <Contact />
        </Route>

        <Route path="/Health" exact>
          <Health />
        </Route>

        <Route path="/Help" exact>
          <Help />
        </Route>

        <Route path="/Help/Carpolicybuy" exact>
          <Carpolicybuy />
        </Route>

        <Route path="/Help/Carpolicydetail" exact>
          <Carpolicydetail />
        </Route>

        <Route path="/Help/Healthpolicybuy" exact>
          <Healthpolicybuy />
        </Route>

        <Route path="/Help/Healthpolicydetail" exact>
          <Healthpolicydetail />
        </Route>

        {/* Health page */}
        
        {/* <Route path="/Health/Quote" exact>
          <Components />
        </Route> */}

        <Route>
          {/*<img src={error}></img>
          <h1>404:Page not found</h1>*/}
          <Errorpage/>
        </Route>

        

      </Switch>
  );
}

export default Routes;

