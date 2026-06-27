import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import En from "../assets/images/enquiry_1.jpg";
import "../assets/css/enquery.css";
import { FaAddressCard, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
const Enquery = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mo,setMo]=useState("");
  const [city,setCity]=useState("");
  const [company,setCompany]=useState("");
  const [details,setDetails]=useState("");

const submit=async(e)=>{
  e.preventDefault()
  const data={
    name,email,mo,company,details,city
  }
     const response = await axios.post(
      `${process.env.REACT_APP_HOST}postdata`,
      data
    );
}

  return (
    <div className="Enquery-main">
      <img width="100%" src={En} />
      <div className="container mt-3">
        <h5>REQUEST A QUOTE</h5>
        <span>
          WE WELCOME ANY QUESTION OR REQUIRMENT YOU MAY HAVE FOR OUR PRODUCTS
        </span>
        <h5 className="mt-3">Contact </h5>
        <span>For any kind of query, contact us with the details below.</span>
        <div className=" d-flex mt-2">
          <FaPhoneAlt className="me-2" /> <p>+91 8888986900</p>
        </div>
        <div className=" d-flex">
          <FaMailBulk className="me-2" />
          <p>shreecalibration.mt@gmail.com</p>
        </div>
        <div className=" d-flex">
          <p>
            <FaAddressCard className="me-2" />
          </p>
          <p>
            {" "}
            Plot No. 97 Shop No. 06 Manish Aparment , Roplekar Hospital Road ,
            Tilak Nagar Chhatrapati Sabhaji Nagar-Maharasthra -431001
          </p>{" "}
        </div>
      </div>
      <div className="container">
        <form onSubmit={submit}>
        <div className="row">
          <div className="col-md-4">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Name Of Company"
                onChange={(e)=>{setCompany(e.target.value)}}
                value={company}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Name Of Contact Person"
                aria-label="Username"
                   onChange={(e)=>{setName(e.target.value)}}
                value={name}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Cell No"
                aria-label="Username"
                   onChange={(e)=>{setMo(e.target.value)}}
                value={mo}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="Username"
                   onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="col-md-8">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Addres /city "
                aria-label="Username"
                   onChange={(e)=>{setCity(e.target.value)}}
                value={city}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                style={{ height: "145px" }}
                placeholder="Recquirement Details"
                as="textarea"
                onChange={(e)=>{setDetails(e.target.value)}}
                value={details}
                aria-label="With textarea"
              />
            </InputGroup>
          </div>
          <div className="col-12">
              <button className="btn btn-primary mb-2">Submit</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};
export default Enquery;
