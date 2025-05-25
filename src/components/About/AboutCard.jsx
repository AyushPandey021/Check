import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Pandey </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br />
            I have recently completed my <span className="purple">Bachelor of Computer Applications (BCA)</span> 
            at Makhanlal Chaturvedi University, Bhopal.
            <br />
            I am passionate about becoming a skilled software developer and constantly strive to learn and grow. 
            Currently, I am exploring the <span className="purple">MERN stack</span> and building projects to improve my technical expertise.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />Createing Phone Vlog
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush Pandey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
