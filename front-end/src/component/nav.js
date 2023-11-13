import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import {FaHome, FaMailBulk, FaPhone, FaPhoneAlt, FaUser} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from'../assets/images/shreecalicon.jpg';
import '../assets/css/Navber.css'
function BasicExample() {
  const title=`${<FaHome/>}Service`;
  console.log(title);
  return (
    <div className='main-navbar'>
      
    <div className='subHeader'>
      <div className='container'>
        <div className='row'>
          <div className='d-none d-md-block col-4'>TRUST ON OUR QUALITY</div>
          <div className='col-12 col-sm-5 col-md-3 text-center'><FaPhoneAlt/> + 91 8888986900	</div>
          <div div className='col-12 col-sm-7 col-md-5 text-md-end text-center'><FaMailBulk/> shreecalibration.mt@gmail.com		</div>
          </div>
          </div>
      </div>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home" className='d-flex'><img height="50px" src={logo}/><div className='ms-2'><h1>Shree Calibration</h1><span className='logo-sub'>Measurement And Testing Services 			</span></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-0 ms-auto">
         <Nav.Link><Link to="/shree" className='Nav-Link d-flex align-items-center'><FaHome className='navbar-icon me-1'/>Home</Link></Nav.Link>
         <Nav.Link> <Link to="about"  className='Nav-Link d-flex align-items-center'><FaUser className='navbar-icon me-1'/>About</Link></Nav.Link>
         <Nav.Link> <Link to="services"  className='Nav-Link d-flex align-items-center'><FaUser className='navbar-icon me-1'/>Services</Link></Nav.Link>

        
        {/* <NavDropdown title={<span><FaHome className='navbar-icon me-1'/>Service</span>} id="basic-nav-dropdown">
              <NavDropdown.Item><Link>Calibration Service</Link></NavDropdown.Item>
              <NavDropdown.Item><Link>Instrument Repair</Link></NavDropdown.Item>
              <NavDropdown.Item><Link>Supply Measuring instruments & Gauges</Link></NavDropdown.Item>
            </NavDropdown>
             */}
         <Nav.Link> <Link to="contact"  className='Nav-Link d-flex align-items-center'><FaHome className='navbar-icon me-1'/>Contact Us</Link></Nav.Link>
         <Nav.Link> <Link to="/enquery"  className='Nav-Link d-flex align-items-center'><FaUser className='navbar-icon me-1'/>Enquiry</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;