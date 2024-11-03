import React, { useContext } from 'react';
import axios from 'axios'; 
import style from "./homepage.css";
import logo from "./Images/oglogo.png";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
    const getNews =()=>{
        axios.get("https://newsapi.org/v2/everything?q=insurance&apiKey=d7ed0959dee44051b886e635a4506a03")
        .then((response)=>{
            console.log(response);
        })
    }
return (
    <div class="footer-clean">
        <ScrollToTop smooth top='100'/>
    <footer>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-4 col-md-3 ml-0 mr-5 item_logo">

                <img
                style={{ fontSize: "64px" }}
                className={style.circlelogo}
                src={logo} alt="HOI-Logo"
                width="200" height="70"
                ></img>
                <address>321, Ijmima Complex,
                Link Road, Malad(West),
                Mumbai-400064.</address></div>
                <div class="col-lg-2 col-md-3 item_about">
                    <h3>News Feed</h3>
                    <ul>
                        <li><a href="/The New York Times">The New York Times</a></li>
                        <li><a href="#">New Portal</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 col-md-3 item_links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Car & Taxi</a></li>
                        <li><a href="#">Health Insurance</a></li>
                        <li><a href="#">Policy Renew</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
                {/*col-lg-3*/}
                <div class="col-sm-4 col-md-3 item social">
                    <a href="https://www.facebook.com/" target="_blank"><i class="icon ion-social-facebook"></i></a>
                    <a href="https://twitter.com/?lang=en" target="_blank"><i class="icon ion-social-twitter"></i></a>
                    <a href="https://in.linkedin.com/" target="_blank"><i class="icon ion-social-linkedin"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i class="icon ion-social-instagram"></i></a>
                    {/*<p class="copyright">Company Name © 2018</p>*/}
                    <p class="copyright">HOI Financial Services
                    ©{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    </footer>
</div>
)
}


export default Footer
