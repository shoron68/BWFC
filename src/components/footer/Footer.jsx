import { Col, Container, Row } from "react-bootstrap"
import logo from "../../assets/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer_main">
        <Container>
            <Row className="justify-content-center">
                <Col lg={5} xs={12} sm={12} md={12}>
                   <div className="footer_left">
                   <h2>BWFC</h2>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                   </div>
                </Col>
                <Col lg={{span:2,offset:1}} xs={6} sm={6} md={6}>
                <div className="footer_right">
                    <h3>Company</h3>
                    <h6>About Us</h6>
                    <h6>Careers</h6>
                    <h6>Blog</h6>
                    <h6>Pricing</h6>
                </div>
                </Col>
                <Col lg={2} xs={6} sm={6} md={6}>
                <div className="footer_right">
                    <h3>Product</h3>
                    <h6>Invoicing Platform Us</h6>
                    <h6>Accounting Plateform</h6>
                    <h6>Create Proposal</h6>
                    <h6>Contracts</h6>
                </div>
                </Col>
                <Col lg={2} xs={6} sm={6} md={6}>
                <div className="footer_right">
                    <h3>Resources</h3>
                    <h6>Proposal Template</h6>
                    <h6>Invoice Template</h6>
                    <h6>Tuturoial</h6>
                    <h6>How to write a contract</h6>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="footer_bottomm">
        <Container>
            <Row>
                <Col lg={4} xs={12} sm={12} md={12}>
                    <div className="ftr_btm_left">
                        <p>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
                    </div>
                </Col>
                <Col lg={{span:2,offset:6}} xs={12} sm={12} md={12}>
                <div className="ftr_btm_right">
                    <p>Supported by Microsoft Startup</p>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
    </>
    
  )
}

export default Footer