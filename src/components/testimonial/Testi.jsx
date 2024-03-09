import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import slide from "../../assets/slider.png"
import Slider from 'react-slick'
import "./tasti.css"
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import bal from "../../assets/bal.png"
import { FaStar } from "react-icons/fa";




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div  className='next' onClick={onClick}> <IoMdArrowForward /> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div  className='prev' onClick={onClick}> <IoMdArrowBack />
        </div>
    );
  }

const Testi = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
    <Container>
        <div className="testi_uppr">
        <Row>
            <Col lg={4} xs={12} sm={12} md={12}>
                <h6>Testimonials</h6>
                <h3>Check what our clients are saying</h3>
            </Col>
        </Row>
        </div>

        <Row>
            <Col lg={7} xs={12} sm={12} md={12}>
    
               <div className=" slide_mainn">
                <Slider {...settings}>
                <div className="slid_img">
                    <img src={slide} className='w-100' alt="" />
                </div>
                <div className="slid_img">
                    <img src={slide} className='w-100' alt="" />
                </div>
                <div className="slid_img">
                    <img src={slide} className='w-100' alt="" />
                </div>
                </Slider>
              
               </div>
                
     
            </Col>

            <Col lg={{span:4,offset:1}} xs={12} sm={12} md={12}>
            <div className="testi_right">
              <img src={bal} alt="" />
              <h5>Save Time Managing Social Media For Your Business</h5>
              <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly. </p>
              <div className="secend">
                <p>Believing neglected so so allowance existence departure in. In design active temper be uneasy.</p>
              </div>
              <div className="test_icons">
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              </div>
              <h6>Angela Taylor</h6>
              <span>CEO SAMSUNG</span>
            </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Testi