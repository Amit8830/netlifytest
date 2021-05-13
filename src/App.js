import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/mynavbar/mynavbar";
import MyCarousal from "./components/mycarousal/mycarousal";
import Title from "./components/titlemessage/title";
import Fade from "react-reveal/Fade";
import About from "./pages/about/about";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import Skills from "./pages/skills/skills";
import Projects from "./pages/projects/projects";
import ProjectTimeline from "./components/projectstimeline/project";
import Contact from "./pages/contactform/contactform";
import Footer from "./components/footer/footer";

import "./App.css";
const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <Title />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>

      {/* skills  */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <div>
          <Container className="container-box rounded">
            <Fade bottom duration={500}>
              <Projects />
            </Fade>
          </Container>
        </div>

        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade bottom duration={500}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
