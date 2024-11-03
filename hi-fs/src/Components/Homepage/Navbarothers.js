import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; 
import logo from "./Images/Logo.png";

function Navbarothers() {  
  return (  
    <>  
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">  
        <Container>  
          <Navbar.Brand href="/"><img src={logo} alt="logo"></img></Navbar.Brand>  
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />   */}
          {/* <Navbar.Collapse id="responsive-navbar-nav">   */}
            {/* <Nav className="me-auto">
            <Nav.Link href="#features">Link 1</Nav.Link>  
              <Nav.Link href="#pricing">Link 2</Nav.Link>  
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>  
              </NavDropdown> 
            </Nav>   */}
            <Navbar sticky="top">  
              <Nav.Link href="/Help"><p class="font-weight-bold">Help</p></Nav.Link>  
              {/* <Nav.Link eventKey={2} href="#memes">  
                Another Link  
              </Nav.Link>   */}
            </Navbar>  
          {/* </Navbar.Collapse>   */}
        </Container>  
      </Navbar>  
    </>  
  );  
}  
export default Navbarothers;  