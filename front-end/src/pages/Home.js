import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/css/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Home_bg from '../assets/images/home-bg.jpg';
import items_1 from '../assets/images/1.jpg';
import items_2 from '../assets/images/2.jpg';
import items_3 from '../assets/images/3.jpg';
import items_4 from '../assets/images/4.jpg';
import items_5 from '../assets/images/5.jpg';
import items_6 from '../assets/images/6.jpg';
import items_7 from '../assets/images/7.jpg';
import items_8 from '../assets/images/8.jpg';
import about_us from '../assets/images/about-us.jpg';
const options = {
  margin: 40,
  responsiveClass: true,
  nav: false,
  dots:true,
  autoplay:true,
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 2,
      },
      600: {
          items: 3,
      },
      700: {
          items: 4,
      },
      1000: {
          items:5,

      }
  },
};
const Home=()=>{
  return (
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
      className="d-block w-100 crawser-img"
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
       className="d-block w-100 crawser-img"
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
     <div className='aboute container'>
        <h2 className='text-center mt-5'>About Us</h2>
        <div className='row mt-3'>
          <div className='col-12 col-xl-6'>
            <p>We "Shree Calibration Measure and Services" from 2023. We are providing an excellent 						
quality of calibration and repairing services and our setup is situated in Chhatrapati 						
Sambhajinagar , Maharashtra, India. We majorly services the customers from 						
Sambhajinagar, Pune and Jalan.</p>
<p>We are rendering these services with the help of our talented professionals with following 							
set industry norms and standards. Our provided services are highly admired and 							
appreciated among our clients for their client specific resolution. Apart from this, we are 							
offering these services at leading market price within the committed span of time.</p>
<p>We have attained a huge number of clients owing to our quality assured services. 							
We mensure to our clients that provided services are effective and give accurate resolution to our 							
reputed customers. We are the best option available in the market to avail these offered 							
services. We work hard to offer clients a supreme quality service within the limited time 							
frame. Furthermore, we take the suggestions and feedback of our valued customers and 							
conceptualise these to meet their demands.</p>
<p>Under the assistance of our mentor Mr. Vallabh Sawale, we have been able to achieve this 							
remarkable position in the market. His vast knowledge of this domain, enable us to have a 							
huge client base across the nation NABL calibration and repairing services for precision							
measuring instruments in the field of mechanical, thermal. We also deal in sales of old and 							
new instruments.							</p>
          </div>
          <div className='col-12 col-xl-6'>
          <img height="500px" width="100%" src={about_us}/>
          </div>
        </div>
       <h4 className='mt-5'> Calibration Services</h4> 	
       <p>* Mechanical calibration	</p>
       <p>* Thermal Calibration	</p>	
     </div>
     <div className='product-crowser container '>
      <div className='d-flex mt-5 align-items-center'> <div className='title-line'></div>
      <h2 className='text-center'>Our Services</h2>
      <div className='title-line'></div>
      </div>
     <OwlCarousel className='owl-theme mt-5' loop margin={10} nav {...options}>
    <div class='item'>
        <img src={items_1}/>
        <h5 className='text-center mt-3'>Ampere Meter</h5>
    </div>
    <div class='item'>
        <img src={items_2} height="200px"/>
        <h5 className='text-center mt-3'>Ampere Meter</h5>
    </div>
    <div class='item'>
        <img src={items_3} height="200px"/>
        <h5 className='text-center mt-3'>Ampere Meter</h5>
    </div>
    <div class='item'>
        <img src={items_4} height="200px"/>
        <h5 className='text-center mt-3'>Ampere Meter</h5>
    </div>
    <div class='item'>
        <img src={items_5} height="200px"/>
        <h5 className='text-center mt-3'>Ampere Meter</h5>
    </div>
    <div class='item'>
        <img src={items_6} height="200px"/>
        <h5 className='text-center mt-3'>Ampere Meter</h5>
    </div>
    <div class='item'>
        <img src={items_7} height="200px"/>
        <h5 className='text-center mt-3'>Ampere Meter</h5>
    </div>
    <div class='item'>
        <img src={items_8} height="200px"/>
        <h5 className='text-center mt-3'>Ampere Meter</h5>
    </div>
    </OwlCarousel>
     </div>
    </div>
  );
}
export default Home;