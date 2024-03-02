import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import AboutUs from "./About";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="footer-row">
                    <Col md={3} sm={5} className="box">
                        <div className="logo">
                            <ion-icon name="bag"></ion-icon>
                            <h1>Switch Trade</h1>
                        </div>
                        <p>
                            <strong>Switch Trade &copy;</strong> is a platfrom
                            where commodities transform into value and wealth
                            through seamless exchanges, embracing the essence of
                            trade by barter.
                        </p>
                        <p>
                            Users foster a sustainable cycle by decluttering
                            their spaces and allowing users to give value to
                            unused items while gaining value from others.
                        </p>
                    </Col>
                    <Col md={3} sm={5} className="box">
                        <AboutUs />
                    </Col>
                    <Col md={3} sm={5} className="box">
                        <h2>Help Center</h2>
                        <ul>
                            <li>How to Trade </li>
                            <li>Returns & Refunds </li>
                        </ul>
                    </Col>
                    <Col md={3} sm={5} className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Lagos | Abuja | Remote</li>
                            <li>
                                Email(s):
                                <br /> info@switchtrade.com.ng, <br />
                                alloysly@gmail.com,
                                <br /> sadiqasg@gmail.com
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
