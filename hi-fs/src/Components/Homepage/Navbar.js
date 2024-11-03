import logo from "./Images/Logo.png";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import Nav2 from "./Nav2";
import {Link} from 'react-router-dom';
import loginicon from './Images/login.svg';
import viewpolicy from './Images/manage-policy-v2.svg';
import renewpolicy from './Images/renew-policy-v2.svg';
import person from './Images/person-circle.svg';
import { useAuthStore } from '../../store/store';
import useFetch from '../Hooks/fetch.hook.js';


const  Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const { username } = useAuthStore(state => state.auth)
    const[{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`)

    return (
        <div>
            <div className='home_nav'>
                <nav className='main_nav'>
                    <a href="/"><img src={logo} alt="logo" className="hid"></img></a>

                    <div className="navlinks_div nav_left">
                        <ul class="navlinks">
                            <li id="main_logo"><a href="/"><img src={logo} alt="logo"></img></a></li>  
                            {/*<li><Link to ="../Newfeed/Newsfeed">About Us</Link></li>*/}          
                            <li><Link to ="../Aboutus/About">About Us</Link></li>
                            <li><Link to ="../Contactus/Contact">Contact Us</Link></li>
                        </ul>
                    </div>
               
                    <div className="navlinks_div nav_right">
                        <ul class="navlinks">
                            <li><a href="#"><div className="nav_claim">
                            <p style={{marginTop:"3px"}}>View, edit, renew & more</p>
                            <Link to="../Login/Login"><button className="nav_login">Login <i class="fas fa-chevron-down"></i></button></Link>
                            <div class="dropdown-content">
                                <Link to ="../Login/Register"><img src={loginicon} alt="login" height={24} width={24}/>Sign up</Link>
                                <Link to ="../Login/Login"><img src={viewpolicy} alt="viewpolicy"/>Login</Link>
                                <Link to ="/Dashboard"><img src={renewpolicy} alt="renewpolicy"/>Dashboard</Link>
                            </div>
                    </div></a>
                    </li>
                    {/* <li>
<img  type="button" src={person} data-toggle="modal" data-target="#exampleModal"></img>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        Name : {apiData?.firstname || apiData?.username}
      </div>
    </div>
  </div>
</div></li> */}
                    
                    <li className="nav_help"><a href="/Help">Help</a></li>
                    </ul>
            </div>
                
            <div className="hamburger-menu">
                <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} size={20}/><a href="#" className="" onClick={()=>setOpen(!setOpen)}></a>
            </div>
                </nav>

            </div>
            {isOpen? <Nav2></Nav2> : null}
            </div>
    )
}

export default Navbar
