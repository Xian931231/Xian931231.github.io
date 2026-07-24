import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요. <span className="purple">4년 차 백엔드 개발자 이현우</span>
            입니다.
            <br />
            <br />
            현재 <span className="purple">딜라이브 AI Solution TF</span>에서 AI
            기반 서비스 개발 및 업무 자동화 프로젝트를 수행하고 있으며,
            Java/Spring Boot 기반 웹 서비스 개발, 데이터 엔지니어링, 클라우드
            환경 구축 및 운영을 담당하고 있습니다.
            <br />
            <br />
            기존 시스템을 안정적으로 운영하는 것에 그치지 않고,{" "}
            <span className="purple">
              AI 기술을 실제 서비스에 적용하여 업무 효율과 사용자 경험을
              향상시키는 개발
            </span>
            에 관심을 가지고 있습니다.
          </p>

          <p style={{ marginBottom: "0.5rem" }}>관심 분야</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> LLM · RAG 기반 AI 서비스 개발 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> AI Agent 및 업무 자동화 ⚙️
            </li>
            <li className="about-activity">
              <ImPointRight /> Backend Architecture & Cloud ☁️
            </li>
            <li className="about-activity">
              <ImPointRight /> Secure API & Reliable System Design 🔐
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "안정적인 시스템 위에 새로운 가치를 만드는 개발자가 되겠습니다."{" "}
          </p>
          <footer className="blockquote-footer">이현우</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
