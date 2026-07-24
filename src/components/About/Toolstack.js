import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiUbuntu } from "react-icons/si";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import SpringBoot from "../../Assets/TechIcons/springBoot.svg";
import Windows from "../../Assets/TechIcons/Windows.svg";
import Linux from "../../Assets/TechIcons/Linux.svg";





function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu fontSize={"26px"} color="#E95420" />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SpringBoot} alt="Spring Boot" className="tech-icon-images" />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
