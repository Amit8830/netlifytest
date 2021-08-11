import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/amit.jpg";

import "./about.css";

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Amit Gupta</strong>
                                <br />A passionate programmer , born in India. I have Done my Course in Full Stack Web Development with HTML, CSS, JS , React.js, Express.js, Node.js, and MongoDB as my tech stack.
                <br />
                In 2021, I have successfully completed my Engineering with specialization in 'Electronics".
                <br />
                I have done Various Project ,as you can see in my resume and the most interesting project I have done are Youtube Clone, Zoom app and Netflix Clone.
                <br />
                And I have changed my path to IT field because I love coding, interested in making Web application, and the best part is i love to find the error and solve it by myself.
                <br />I love to learn new technologies,and work on my skillset.

                <br /> <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1zIE5-h5AcvfuK_dGwYYe90srusaMHRQt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/Amit8830" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                      </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/amit-gupta-bb6b40199/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                      </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default About;
