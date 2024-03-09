import { Col, Container, Row } from "react-bootstrap"
import "./choose.css"

const Choose = () => {
  return (
    <div className="choose_main">
        <Container>
            <Row>
                <Col lg={5} xs={12} sm={12} md={12}>
                <div className="choose_left">
                    <h5> Why Choose Us</h5>
                    <h2>Track your crytpo portfolio on the best way possible</h2>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                </div>
                </Col>
                <Col lg={{span:4,offset:2}} xs={12} sm={12} md={12 }>
                <div className="choose_right">
                    <input type="text" placeholder="Email Address" />
                    <input type="password"  placeholder="Password" />
                    <div className="btnnnnn">
                        <a href="#">Get Started</a>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Choose