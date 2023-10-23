import React from "react";
import "../assets/css/about.css";
import about_us from "../assets/images/about_us1.jpg";
const About = () => {
  return (
    <div className="aboutUs_Main">
      <img src={about_us} alt="not_found" />
      <div className="container mt-4 aboutUs-content">
        <p>
          We "Shree Calibration Measure and Services" from 2023. We are
          providing an excellent quality of calibration and repairing services
          and our setup is situated in Chhatrapati Sambhajinagar , Maharashtra,
          India. We majorly services the customers from Sambhajinagar, Pune and
          Jalan.{" "}
        </p>

        <p>
          We are rendering these services with the help of our talented
          professionals with following set industry norms and standards. Our
          provided services are highly admired and appreciated among our clients
          for their client specific resolution. Apart from this, we are offering
          these services at leading market price within the committed span of
          time.
        </p>

        <p>
          We have attained a huge number of clients owing to our quality assured
          services. We mensure to our clients that provided services are
          effective and give accurate resolution to our reputed customers. We
          are the best option available in the market to avail these offered
          services. We work hard to offer clients a supreme quality service
          within the limited time frame. Furthermore, we take the suggestions
          and feedback of our valued customers and conceptualise these to meet
          their demands.
        </p>

        <p>
          Under the assistance of our mentor Mr. Vallabh Sawale, we have been
          able to achieve this remarkable position in the market. His vast
          knowledge of this domain, enable us to have a huge client base across
          the nation NABL calibration and repairing services for precision
          measuring instruments in the field of mechanical, thermal. We also
          deal in sales of old and new instruments.
        </p>
        <h4 className="text-center">Why Us? </h4>
        <p>
          {" "}
          We have emerged as a prominent organization engaged in offering a wide
          array of calibration and repairing services. Owing to our strong
          association with some of the huge client base, we are able to render
          the varied requirements of our valuable customers per their needs and
          demands.{" "}
        </p>
        <h5>Some of our key factors are following: </h5>
        <ul>
          <li>One stop solution for all NABL calibration needs</li>
          <li>FREE Car service for heavy and big size instruments</li>
          <li>
            FREE pick up drop service even for a single instrument around Pune
          </li>
          <li>On site calibration service at customer end</li>
          <li>No N.C. (non-conformance) for calibration in customer's audit</li>
          <li> Customer's urgency = Our top priority</li>
          <li>We provide exact status of instrument (pass or fail)</li>
          <li> Monthly reminders of calibration dues</li>
        </ul>
      </div>
    </div>
  );
};
export default About;
