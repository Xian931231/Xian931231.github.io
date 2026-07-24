import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/이현우_프로필사진.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              저는 여러 고객사(충남대, INNOCEAN, Miro, AIworks 등)의{" "}
              <b className="purple">SI 프로젝트 및 사내 프로젝트등 총 6개</b>를 설계부터 개발,
              배포, 운영까지 전 과정을 수행해온{" "}
              <b className="purple">풀스택 개발자이자 AX 엔지니어</b>
              입니다.
              <br />
              <br />
              저는
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Node.js, REST API{" "}
                </b>
              </i>
              기반 개발에 능숙하며, <b className="purple">AWS</b>(S3, Lambda,
              API Gateway, EC2)와{" "}
              <b className="purple">Oracle, PostgreSQL, MariaDB</b> 등
              다중 DB 환경에서 설계·쿼리 최적화까지 수행한 경험이 있습니다.
              <br />
              <br />
              대표적인 성과로는{" "}
              <b className="purple">Azure → AWS 무중단 서버 이관</b>을
              완료하고 레거시 시스템을 Java로 전환해 유지보수성을 크게
              향상시켰으며, <b className="purple">SAP BW/DW 기반 ETL 운영</b>
              과 경영진 KPI 대시보드 구축을 통해 데이터 기반 의사결정 환경을
              지원한 경험이 있습니다.
              <br />
              <br />
              현재는
              <i>
                <b className="purple">
                  {" "}
                  AX(AI Transformation)와 AI 자동화{" "}
                </b>
              </i>
              에 집중하고 있습니다. <b className="purple">콜센터 자동 후처리 시스템(AICC)</b>를 <b className="purple">AI Agent</b> 기반으로
              AI 자동화 플랫폼 PoC를 주도하여 개발 및 운영하고 있고,{" "}
              <b className="purple">Lang Graph</b> 기반{" "}
              <b className="purple">AI Agent</b>를 개발하는 사업을 진행하고 있습니다.
              개인적으로 <b className="purple">LLM 파인튜닝과 RAG</b>를
              연구하며 AI 솔루션 도입 타당성 검증 보고서도 작성하고
              있습니다.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
