import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./business.css"
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
import five from "../../assets/five.png"
import six from "../../assets/six.png"

const Business = () => {
  return (
    <>
    <div className="business_main">
        <Container>
            <Row className='text-center'>
                <Col lg={12} xs={12} sm={12} md={12}>
                <div className="upper">
                <h4>Over 32k+ software  businesses growing with AR Shakir</h4>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={2} xs={6} sm={6} md={6} >
                    <div className="img_main">
                        <img src={one} alt="" />
                    </div>
                </Col>
                <Col lg={2} xs={6} sm={6} md={6} >
                    <div className="img_main">
                        <img src={two} alt="" />
                    </div>
                </Col>
                <Col lg={2} xs={6} sm={6} md={6}>
                    <div className="img_main">
                        <img src={three} alt="" />
                    </div>
                </Col>
                <Col lg={2} xs={6} sm={6} md={6}>
                    <div className="img_main">
                        <img src={four} alt="" />
                    </div>
                </Col>
                <Col lg={2} xs={6} sm={6} md={6}>
                    <div className="img_main">
                        <img src={five} alt="" />
                    </div>
                </Col>
                <Col lg={2} xs={6} sm={6} md={6}>
                    <div className="img_main">
                        <img src={six} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Business