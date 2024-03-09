import { Col, Container, Row } from "react-bootstrap"
import "./verified.css"
import card from "../../assets/card.png"

const Verified = () => {
  return (
    <div className="verified_main">
        <Container>
            <Row>
                <Col lg={5}>
                <div className="veri_left">
                    <h5>Our Feature</h5>
                    <h3>All payments are linked to your Financy account</h3>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <a href="#">Get Started</a>
                </div>
                </Col>
                <Col lg={{span:6,offset:1}}>
                <div className="veri_img">
                    <img src={card} className="w-100" alt="" /> 
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Verified
