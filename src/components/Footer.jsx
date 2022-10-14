import "./Footer.scss";
import { Row, Col } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import iiitbLogo from "../assets/iiitb-logo.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-sm">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-sm d-none d-sm-block">
                                <span>
                                    <h1 className="footer-logo">Logo</h1>
                                </span>
                                <span>
                                    <h1 className="footer-logo">
                                        <img src={iiitbLogo} alt="" />
                                    </h1>
                                </span>
                                <p className="footer-c">© Synergy 2023, IIIT Bangalore</p>
                            </div>


                            <div className="col-sm d-sm-none">
                                <div className="row">
                                    <div className="col justify-right">
                                        <span>
                                            <h1 className="footer-logo">Logo</h1>
                                        </span>
                                    </div>
                                    <div className="col">
                                        <span>
                                            <h1 className="footer-logo">
                                                <img src={iiitbLogo} alt="" />
                                            </h1>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="footer-c" style={{ textAlign: "center" }}>© Synergy 2023, IIIT Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isMobile &&
                    <div className="col-sm mobile d-none d-sm-block">
                        <div className="footer-content">
                            <Row>
                                <Col md={6} className="headersFooter">
                                    <div className="col-md wrapperHeadings">
                                        <h1 className="footer-heading">Social</h1>
                                        <h1 className="footer-subheading">Handles</h1>
                                    </div>
                                </Col>
                                <Col md={6} >
                                    <div className="foot-icon-list">
                                        <div className="row">
                                            <Col>
                                                <a href="https://www.instagram.com/iiitb_official/" target="_blank" rel="noreferrer" className="footer-icon">
                                                    <AiFillInstagram style={{ color: "white", fontSize: "2.5em" }} className="ra-icon" />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://www.facebook.com/IIITBofficial/" target="_blank" rel="noreferrer" className="footer-icon">
                                                    <BsFacebook style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://in.linkedin.com/school/iiit-bangalore/" target="_blank" rel="noreferrer" className="footer-icon">
                                                    <BsLinkedin style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://twitter.com/IIITB_official" target="_blank" rel="noreferrer" className="footer-icon">
                                                    <FaTwitter style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
                                                </a>
                                            </Col>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
export default Footer;