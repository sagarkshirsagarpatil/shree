import React from 'react'
import '../assets/css/Navber.css';
import { FaBell, FaHome, FaUser } from "react-icons/fa";
const Navbar=()=>{
  return (
    <div className='navbar-main'>
      <div className='navbar-logo'>
         <FaHome/>
        <img src=""/>
      </div>
      <div className='navbar-menu'>
<ul>
   <li><FaHome className='navbar-icon'/>Home</li> 
   <li><FaHome className='navbar-icon'/>About</li> 
   <li><FaBell className='navbar-icon'/>Service</li> 
   <li><FaUser className='navbar-icon'/>Cotacts</li>                 
</ul>
      </div>
     </div>
  )
}
export default Navbar;
