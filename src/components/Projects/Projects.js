import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          실무 <strong className="purple">프로젝트</strong>
        </h1>
        <p style={{ color: "white" }}>
          그동안 수행했던 SI / 사내 프로젝트입니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AI 기반 업무 자동화 플랫폼 (AICC)"
              period="2025.07 ~ 현재 · 딜라이브"
              description="Workato 기반 AI 자동화 플랫폼 도입 전략 수립 및 PoC 주도. SaaS·내부 DB·업무 시스템 간 REST API 데이터 연동 아키텍처 설계, 고객 응대 자동화·데이터 수집·알림 전송 시나리오 구현."
              techStack="Workato, REST API, Oracle DB, JSON"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="DW/BI 운영 및 데이터 플랫폼 고도화"
              period="2025.01 ~ 2025.07 · 딜라이브"
              description="SAP ERP/CRM/Billing 다중 소스 데이터 ETL 처리 및 Oracle/SAP BW DW 적재 운영. 데이터 품질 관리 프로세스 수립 및 경영진 KPI 대시보드 구축."
              techStack="Oracle, SAP BW, SAP Data Services, Informatica, Web Intelligence, Crystal Report, Lumira"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="INNOCEAN MOCA — 지역 타겟 광고 대행 플랫폼"
              period="2023.04 ~ 2024.03 · 뉴프롬"
              description="위치 기반 광고 노출 로직 구현, 광고주·대행사·관리자 3단계 권한 분리 포털 설계, 등록→심의→승인→게시 워크플로우 API 개발."
              techStack="Spring Boot, Java, MyBatis, PostgreSQL, AWS S3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Miro OutboundCall — 고객 상담 콜 시스템"
              period="2023.02 ~ 2023.04 · 뉴프롬"
              description="AWS Lambda + API Gateway 기반 서버리스 아키텍처 설계, 상담원 일정 관리 및 예약 충돌 방지 로직 구현."
              techStack="AWS Lambda, API Gateway, MariaDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AIworks — Azure to AWS 서버 이관"
              period="2022.08 ~ 2023.02 · 뉴프롬"
              description="Azure 운영 서비스(Node.js/PHP/React 혼재) 분석 후 무중단 AWS 이관, 레거시 코드를 Spring Boot + Java 구조로 리팩토링."
              techStack="Spring Boot, Java, Node.js, PHP, AWS EC2, AWS S3, MariaDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="충남대학교 DUNet LCMS — 클라우드 학습관리 시스템"
              period="2021.11 ~ 2022.08 · 뉴프롬"
              description="LCMS 페이지 리뉴얼 및 온라인 시험 응시 페이지 풀스택 개발, Oracle DB 스키마 설계 및 쿼리 최적화."
              techStack="Spring Boot, Java, MyBatis, Oracle, JavaScript, jQuery"
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ paddingTop: "40px" }}>
          토이 <strong className="purple">프로젝트</strong>
        </h1>
        <p style={{ color: "white" }}>
          개인적으로 진행한 사이드 프로젝트입니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
