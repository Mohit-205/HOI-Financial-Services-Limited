import React from 'react';
import './homepage.css';
import Navbar from './Navbar';
import Main from './Main';
import Sub from './Sub';
//import Main2 from './Main2';
import Sub2 from './Sub2';
import Nav2 from './Nav2';
import Footer from './Footer';


const Home = () => {
    return (
        <div className='home_home'>
            <Navbar></Navbar>
            <Main></Main>
            <Sub></Sub>
            <Sub2></Sub2>
            <Footer></Footer>
        </div>
    )
}

export default Home
