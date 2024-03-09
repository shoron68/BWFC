import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Fanre from '../fancy reuseable/Fanre'
import "./financy.css"

const Financy = () => {
  return (
    <div className="financy_main">
        <Container>
            <Row className='justify-content-center'> 
                <Col lg={4} xs={12} sm={12} md={12}>
                <div className="financy_header text-center">
                    <h4>Why Financy</h4>
                    <h2>Why Choose Us</h2>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{span:5,offset:1}} xs={12} sm={12} md={12}>
                    <Fanre/>
                </Col>
                <Col lg={5} xs={12} sm={12} md={12}>
                    <Fanre/>
                </Col>
                <Col lg={{span:5,offset:1}} xs={12} sm={12} md={12}>
                    <Fanre/>
                </Col>
                <Col lg={5} xs={12} sm={12} md={12}>
                    <Fanre/>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default Financy