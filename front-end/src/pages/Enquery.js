import React from "react";
import {InputGroup,Form} from 'react-bootstrap'
import En from "../assets/images/enquiry_1.jpg";
import "../assets/css/enquery.css";
import { FaAddressCard, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
const Enquery=()=>{

return(
<div className="Enquery-main">
<img width="100%"  src={En}/>
<div className="container mt-3">
 <h5>REQUEST A QUOTE</h5>
 <span>WE WELCOME ANY QUESTION OR REQUIRMENT YOU MAY HAVE FOR OUR PRODUCTS</span>
 <h5 className="mt-3">Contact </h5>
 <span>For any kind of query, contact us with the details below.</span>
 <div className=" d-flex mt-2"><FaPhoneAlt className="me-2"/> <p>+91 8888986900</p></div>
 <div className=" d-flex"><FaMailBulk className="me-2"/><p>shreecalibration.mt@gmail.com</p></div>
 <div className=" d-flex"><p><FaAddressCard className="me-2"/></p><p> Plot No. 97 Shop No. 06 Manish Aparment , Roplekar Hospital  					
Road , Tilak Nagar Chhatrapati Sabhaji Nagar-Maharasthra -431001</p> 					</div>
</div>
<div className="container">
<div className="row">
<div className="col-md-4">
<InputGroup className="mb-3">
        <Form.Control
          placeholder="Name Of Company"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Name Of Contact Person"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Cell No"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
</div>
<div className="col-md-8">
<InputGroup className="mb-3">
        <Form.Control
          placeholder="Addres /city "
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control style={{height:"145px"}}   placeholder="Recquirement Details" as="textarea" aria-label="With textarea" />
      </InputGroup>
</div>
</div>
</div>
</div>
)
}
export default Enquery;