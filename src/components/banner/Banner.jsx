import "./banner.css"
import bnr from "../../assets/ban.png"
import { FaPlayCircle } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap"

const Banner = () => {
  return (
    <div className="banner_main">
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12} xs={12}>
                    <div className="left">
                        <h1>Managing business payments has never been easier</h1>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>

                        <div className="bnr_btn">
                        <Row>
                            <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="lefttt">
                            <a href="#">Get Started</a>
                            </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                            <div className="right_bnr_btn ">
                                <a href="#" className="rigt_btn"> <FaPlayCircle className="icon" /> See How It Works</a>
                            </div>
                            </Col>
                        </Row>
                        </div>
                    </div>
                    
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}>
                    <div className="bnr_ing">
                        <img src={bnr} className="w-100" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner