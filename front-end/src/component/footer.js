import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";
import {
  FaAddressBook,
  FaAddressCard,
  FaArrowAltCircleLeft,
  FaArrowRight,
  FaLongArrowAltDown,
  FaLongArrowAltRight,
  FaMailBulk,
  FaMailchimp,
  FaPhoneAlt,
  FaRegAddressBook,
  FaRegAddressCard,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 col-md-3 ">
            <h5 className="mb-4">Quick links</h5>
          <p>  <Link to="home" className="Nav-Lin d-flex align-items-center">
              <FaArrowRight className="me-2" /> Home
            </Link></p>
            <p><Link to="/about" className="Nav-Lin d-flex align-items-center">
              <FaArrowRight className="me-2" />
              About
            </Link></p>
           <p> <Link to="/services" className="Nav-Lin d-flex align-items-center">
              <FaArrowRight className="me-2" />
              Services
            </Link></p>
            <p><Link to="/contact" className="Nav-Lin d-flex align-items-center">
              <FaArrowRight className="me-2" />
              Contact Us
            </Link></p>
          </div>
          <div className="mt-4 mt-sm-0 col-12 col-sm-5 col-md-4">
            <h5 className="mb-4">Our Services</h5>
            <p> <FaArrowRight className="me-2" />Calibration Services</p>
            <p> <FaArrowRight className="me-2" /> Mechanical Calibration servies </p>
            <p> <FaArrowRight className="me-2" />Thermal calibration Services</p>
            <p> <FaArrowRight className="me-2" />Instrument Reparing Services</p>
            <p> <FaArrowRight className="me-2" />
            Suppy Merasuring Instrumnts & Gauges</p>
          </div>
          <div className="mt-4 mt-md-0 col-12 col-sm-12 col-md-5">
            <h5 className="mb-4">Shree Calibration Measurment & Testing Services 					
					</h5>
          <p className="d-flex"><p> <FaAddressBook className="me-2" /></p>Plot No. 97 Shop No. 06 Manish Aparment,Roplekar Hospital Road,Tilak Nagar Chhatrapati Sabhaji Nagar-Maharasthra -431001 				 </p>
          		<p> <FaMailBulk className="me-2" />shreecalibration.mt@gmail.com		</p>
            <p> <FaPhoneAlt className="me-2" />
            + 91 8888986900	</p>
          </div>
        </div>
      </div>
      <div className="last-path text-center">
     <div>
      <p className="p-2">Hosted By : shreecalibration</p>
     </div>
      </div>
    </div>
  );
};
export default Footer;
