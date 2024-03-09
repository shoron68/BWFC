import { Col, Container, Row } from "react-bootstrap"
import "./pay.css"
import pay from "../../assets/pay.png"

const Pay = () => {
  return (
    <div className="pay_main">
        <Container>
            <Row>
                <Col lg={5}>
                <div className="pay_left">
                    <h5>Our Feature</h5>
                    <h2>All payments are linked to your Financy account</h2>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <a href="#">Get Started</a>
                </div>
                </Col>
                <Col lg={{span:6,offset:1}}>
               <div className="pay_right">
               <img src={pay} className="w-100" alt="" />
               </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Pay