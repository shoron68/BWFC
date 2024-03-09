import { Col, Container, Row } from "react-bootstrap"
import "./resi.css"

const Resi = () => {
  return (
    <div className="resi_main">
        <Container>
                <div className="border">
                    <Row>
                    <Col lg={8}>
                <div className="resi_left">
                    <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
                </div>
                </Col>
                <Col lg={{span:3,offset:1}}>
                <div className="resi_right">
                <a href="#">Get Started</a>
                </div>
                </Col>
                    </Row>
                </div>
        </Container>
    </div>
  )
}

export default Resi