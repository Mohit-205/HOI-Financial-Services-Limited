import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Getquote from './pages/Getquote.js';
import Overview from './pages/Overview.js';
import Q1 from './pages/Q1.js';
import Q2 from './pages/Q2.js';
import Q3 from './pages/Q3.js';
import Q4 from './pages/Q4.js';
import Q5 from './pages/Q5.js';
import Q6 from './pages/Q6.js';
import Q7 from './pages/Q7.js';
import Q8 from './pages/Q8.js';
import Q9 from './pages/Q9.js';

import Checkout from './pages/Checkout.js';
import Getpolicy from './pages/Getpolicy';
import Navbarothers from '../Homepage/Navbarothers.js'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; 
import logo from "../Homepage/Images/Logo.png";

import './styles.scss';

function Health() {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };


  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">  
      <Container>  
        <Navbar.Brand href="/"><img src={logo} alt="logo"></img></Navbar.Brand>
          <Navbar sticky="top">  
            <Nav.Link href="/Help"><p class="font-weight-bold">Help</p></Nav.Link>
          </Navbar>  
      </Container>  
    </Navbar> 

    <Router>
    <div className={`health ${toggled ? 'toggled' : ''}`}>
      <Sidebar
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        
        {/* <Switch>
          <Route path="/Health/Quote" component={Components} />
          <Route path="./profile" component={Profile} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact>
            <Home image={image} handleImageChange={handleImageChange} />
          </Route>
          <Redirect to="/not-found" />
        </Switch> */}
        <Switch>
          <Route path="/Health/Quote" exact>
            <Getquote />
          </Route>
          <Route path="/Health/Overview" exact>
            <Overview />
          </Route>
          <Route path="/Health/Overview_Q1" exact>
            <Q1 />
          </Route>
          <Route path="/Health/Overview_Q2" exact>
            <Q2 />
          </Route>
          <Route path="/Health/Overview_Q3" exact>
            <Q3 />
          </Route>
          <Route path="/Health/Overview_Q4" exact>
            <Q4 />
          </Route>
          <Route path="/Health/Overview_Q5" exact>
            <Q5 />
          </Route>
          <Route path="/Health/Overview_Q6" exact>
            <Q6 />
          </Route>
          <Route path="/Health/Overview_Q7" exact>
            <Q7 />
          </Route>
          <Route path="/Health/Overview_Q8" exact>
            <Q8 />
          </Route>
          <Route path="/Health/Overview_Q9" exact>
            <Q9 />
          </Route>
          <Route path="/Health/Checkout" exact>
            <Checkout />
          </Route>
          <Route path="/Health/Getpolicy" exact>
            <Getpolicy />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </main>
    </div>
    </Router>
    </>
  );
}

export default Health;
