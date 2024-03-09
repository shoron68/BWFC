import "./fanre.css"
import { Col, Container, Row } from 'react-bootstrap'

const Fanre = () => {
  return (
    <div className="fanre_mai">
        <Container>
            <Row>
                <Col lg={12}>
                <div className="inner">
                    <div className="circle"></div>
                    <div className="inner_text">
                    <h4>No Extra Fee</h4>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Fanre