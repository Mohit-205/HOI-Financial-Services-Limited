//import react from 'react';
import logo from "./Images/Logo.png";
import {Link} from 'react-router-dom';
import error from './Images/404error.png';

const errorpage = () => {
    return (
        <div className="errorpage">
            <div className='error_nav'>
                <nav className='error_nav'>
                <a href="/"><img src={logo} alt="logo" className="error_hid"></img></a>
                </nav>
            </div>
            <div className="error_img">
                <img src={error}></img>
            </div>
            <div className="error_text">
                <p>We looked everywhere for this page.</p>
                <p>Are you sure the website URL is correct?</p>
                <p>Get in touch with the site owner.</p>
            </div>
            <div className="error_btn">
                <Link to='' >
                    <button className="errorpage_btn" type="submit">
                    <span>Go To Home</span>
                    </button>
                </Link>
            </div>
        </div>
);
}
        
export default errorpage