import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Home_bg from '../assets/images/home-bg.jpg';
const Home=()=>{
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        height="550px"
          className="d-block w-100"
          src={Home_bg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>First slide label</h5>
          <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="info">Services</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height="550px"
          className="d-block w-100"
          src={Home_bg}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Second slide label</h5>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="info">Services</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;