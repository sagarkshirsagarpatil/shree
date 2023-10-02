import React from 'react'
import '../assets/css/Navber.css';
import { FaBeer } from "react-icons/fa";
const Navbar=()=>{
  return (
    <div className='navbar-main'>
      <div className='navbar-logo'>
         <FaBeer/>
        <img src=""/>
      </div>
      <div className='navbar-menu'>
<ul>
   <li>Home</li> 
   <li>About</li> 
   <li>Service</li> 
   <li>Cotacts</li>                 
</ul>
      </div>
     </div>
  )
}
export default Navbar;
