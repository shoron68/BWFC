import React from 'react'
import './feature.css'
import { Col, Container, Row } from 'react-bootstrap'
import balance from "../../assets/balance.png"


const Feature = () => {
  return (
    <div className="feature_main">
        <Container>
            <Row>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="feature_left">
                        <img src={balance} className='w-100' alt="" />
                    </div>
                </Col>
                <Col lg={6} xs={12} sm={12} md={12}>
                    <div className="feature_right">
                        <h5>Our Feature</h5>
                        <h3>Receive payments quickly from anywhere</h3>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Feature