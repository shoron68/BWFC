import { Col, Container, Row } from "react-bootstrap"
import "./free.css"

const Free = () => {
  return (
    <div className="free_main">
        <Container>
            <Row>
                <Col lg={6}>
                <div className="feature_right">
                        <h5>Our Feature</h5>
                        <h3>Receive payments quickly from anywhere</h3>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                    </div>
                </Col>
                <Col lg={{span:4,offset:1}}>
                    <div className="login">
                        <h4>Get Started for Free</h4>
                        <input type="text" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <div className="btnnnn">
                        <a href="#">Get Started</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Free