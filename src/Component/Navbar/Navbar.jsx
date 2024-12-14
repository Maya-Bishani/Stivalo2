import './Navbar.css'
import { Navbar, Nav } from 'react-bootstrap';
export default function Navbar2(){
    return<>
    <Navbar  expand="lg" >
           
            <img className='Logo-img' src='./Images/logo2.png' alt='photo'/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Services">Services</Nav.Link>
                <Nav.Link href="#Team">Team</Nav.Link>
                <Nav.Link href="#Clients">Clients</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
 
   
       </>
}