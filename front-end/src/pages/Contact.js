import React from "react";
import {FaPhoneAlt,FaMailBulk, FaAddressBook} from "react-icons/fa";
const Contact=()=>{
return(
<div className="contact-main container mb-2">
  <h2 className="text-center m-3">Contact Us</h2>
 <div className="row align-items-center">
    <div className="col-12 col-sm-12 col-md-6">
      <h5>Shree Calibration Measurment & Testing Services 					
					</h5>
         <div className="d-flex"><p><FaAddressBook className="me-2" /></p><p>Plot No. 97 Shop No. 06 Manish Aparment , Roplekar Hospital  					
Road , Tilak Nagar Chhatrapati Sabhaji Nagar-Maharasthra -431001 					</p>
</div>
<div className="d-flex"><FaMailBulk className="me-2"/><p>shreecalibration.mt@gmail.com		</p></div>
<div className="d-flex"><FaPhoneAlt className="me-2"/><p>+ 91 8888986900</p></div>
    </div>
    <div className="col-12 col-sm-12 col-md-6">
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="400px" frameborder="0" style={{border:0}}></iframe>
    </div>
 </div>
</div>
)
}
export default Contact;