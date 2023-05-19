import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify", fontFamily: "italic" }}>
            Hello World, I am{" "}
            <span className="primary-header">Mohsin Nawaz</span> from Lahore,
            Pakistan. I am an engineering graduate specialized in Software
            Engineering.I'm a MERN Stack developer specializing in building
            full-stack web applications. I create dynamic user interfaces and
            implement efficient server-side logic. I'm passionate about
            delivering high-quality solutions and constantly expanding my skills
            to stay at the forefront of web development.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
