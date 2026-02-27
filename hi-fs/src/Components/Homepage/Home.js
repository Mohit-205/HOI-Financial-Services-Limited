import './homepage.css';
import Navbar from './Navbar';
import Main from './Main';
import Sub from './Sub';
import Sub2 from './Sub2';
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
