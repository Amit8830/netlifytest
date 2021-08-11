import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";

const Projects = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              ></Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Projects Done:
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <br />
                    <ul className="text-left">
                      <li>Clone of Netflix using React</li>
                      <li>Clone Of Zoom Application using Node ,Express.</li>
                      <li>Clone Of Youtube using React Js</li>
                      <li>Clone of MI Store Keep using React Js</li>
                      <li>Clone of Google Keep using React Js</li>
                      <li>Login and Registration Form using React</li>
                      <li>Bakelogy Cake Shop using React</li>
                      <li>Quiz App using React</li>
                      <li>To-Do List using ReactJs</li>
                      <li>Covid Api using React</li>
                      <li>Digital Clock using React Js</li>
                    <li> A real Time Analog Clock using ReactJs</li>
                    <li> A Dice Game using HTML,CSS,JS</li>
                    <li> Responsive BLOG website using HTML,CSS,JS</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Projects;
