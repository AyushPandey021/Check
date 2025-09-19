import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Anna from "../../Assets/Projects/Anna.png";
import Speaky from "../../Assets/Projects/Speaky.png";
import ThinkBoard from "../../Assets/Projects/ThinkBoard1.png";
import imagify from "../../Assets/Projects/imagify.png";
import Jivan from "../../Assets/Projects/Jivan.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import gitexplorer from "../../Assets/Projects/gitexplorer.png";
import Rezorpay from "../../Assets/Projects/Rezorpay.png";
import frontai from "../../Assets/Projects/front-ai.png";
import think from "../../Assets/Projects/think.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Speaky}
              isBlog={false}
              title="Speaksy – Language Learning"
              description="Communication platform for real-time chat & video calls (MERN + Stream API). Developed with responsive React.js UI, secure WebRTC-based calls, authentication, and room-level access."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://mern-chat-video-calling.onrender.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ThinkBoard}
              isBlog={false}
              title="Thinking Board"
              description="Real-time collaborative platform with full CRUD functionality using Node.js, Express, MongoDB, and React. Integrated WebSockets for live updates and multi-user collaboration with authentication."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://mern-thinkboard-1-ludx.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Anna}
              isBlog={false}
              title="Anna AI Assistant"
              description="Responsive voice-based AI assistant built with React, Google Gemini API, and Web Speech API. Supports real-time speech recognition, text-to-speech, and 3D animated robot UI. Mobile-optimized with interactive mic animations."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://bot-phi-weld.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagify}
              isBlog={false}
              title="Imagify – Prompt Image Generator"
              description="Full-stack MERN application that generates AI-powered images from text prompts. Features JWT authentication, credit-based system, payment gateway integration, and a smooth responsive UI."
              ghLink="https://github.com/AyushPandey021"
              demoLink="404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Productivity Dashboard"
              description="A productivity planner web app that helps users track tasks, goals, and habits with a clean and minimal UI. Built using vanilla JS and DOM manipulation for smooth interactivity."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://productivity-planner-dom-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jivan}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor built with React.js. Supports HTML, CSS, and JS with live preview. Markdown editor includes GFM support, custom HTML tags, toolbar, instant preview, and auto-save with Local Storage."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://jevan-chackra-g8vv.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitexplorer}
              isBlog={false}
              title="GitHub Explorer"
              description="A simple React-based tool where users can enter a GitHub username and instantly view details like profile information, repositories, and activity. This project showcases my skills in API integration, state management, and building responsive, interactive UIs for real-time data fetching."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://git-hub-profile-viewer-phi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitexplorer}
              isBlog={false}
              title="Think In Inovative"
              description="Built a fully responsive educational platform UI using React and Tailwind CSS. Designed key sections like Home, Courses, About, and Contact, with smooth navigation and a mobile-first approach. Focused on creating reusable components, modern typography. This project highlights my skills in React state management, and component-based UI development while maintaining scalability and clean code."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://git-hub-profile-viewer-phi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rezorpay}
              isBlog={false}
              title="Razorpay Frontend Clone "
              description="Developed a fully responsive clone of Razorpay’s landing page using HTML and Tailwind CSS. Focused on building a pixel-perfect, modern UI with a clean layout, smooth hover effects, and a mobile-first approach. responsive grid systems. Successfully replicated key sections like the hero banner, features, and pricing cards while ensuring cross-browser compatibility and scalability for future enhancements."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://rezorpay-clone-tailwind-css.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rezorpay}
              isBlog={false}
              title="CryptoConvo-UI  "
              description=" frontend project where I designed and developed a fully responsive and modern user interface for a crypto discussion platform using HTML, CSS, Tailwind CSS, and JavaScript. The project focuses on creating an intuitive and visually appealing experience with reusable components, smooth animations, and a mobile-first design approach, making it ready for seamless backend integration."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://ayushpandey021.github.io/CryptoConvo-UI-project/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={think}
              isBlog={false}
              title="Razorpay Frontend Clone "
              description="Developed a fully responsive clone of Razorpay’s landing page using HTML and Tailwind CSS. Focused on building a pixel-perfect, modern UI with a clean layout, smooth hover effects, and a mobile-first approach. responsive grid systems. Successfully replicated key sections like the hero banner, features, and pricing cards while ensuring cross-browser compatibility and scalability for future enhancements."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://think-n-innovate.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frontai}
              isBlog={false}
              title="Razorpay Frontend Clone "
              description="Developed a fully responsive clone of Razorpay’s landing page using HTML and Tailwind CSS. Focused on building a pixel-perfect, modern UI with a clean layout, smooth hover effects, and a mobile-first approach. responsive grid systems. Successfully replicated key sections like the hero banner, features, and pricing cards while ensuring cross-browser compatibility and scalability for future enhancements."
              ghLink="https://github.com/AyushPandey021"
              demoLink="https://ayushpandey021.github.io/CryptoConvo-UI-project/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
