import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Container>
      <h2>
        Hello, I'm <span>Fernanda J. Santiago</span>
      </h2>
      <h6>Front-End Developer, based in New York</h6>
      <p>
        🚀 Eager IT Specialist Transitioning to Fresh Frontend Developer |
        SheCodes Alumna Hello LinkedIn community! I'm Fernanda J. Santiago, a
        dedicated professional making a seamless transition from IT to the
        dynamic world of Frontend Development. Nestled in the heart of New York
        City, my journey with SheCodes has been a captivating exploration into
        the art of creating immersive web experiences.
      </p>
      <br />
      <p>
        💻 Skills Snapshot: Languages: Proficient in HTML, CSS, and JavaScript.
        Development Tools: Well-versed in the use of VS Code and adept at API
        integration. Version Control & Hosting: Experienced in utilizing GitHub
        for version control and hosting applications. Design Frameworks: Skilled
        in the implementation of Bootstrap and mastering the flexibility of
        Flexbox. Tech Insights: Explored AI integration and incorporated SEO
        strategies for optimized web solutions. Responsive Design: Committed to
        crafting user-friendly experiences across various devices.
      </p>
      <br />
      <p>
        Clock World: Engineered a visually stunning and functionally robust
        timepiece application. Dictionaries: Developed dynamic and interactive
        dictionaries to enhance user engagement. Weather Apps: Designed and
        implemented user-friendly applications for real-time weather updates.
        Responsive Websites: Successfully created various responsive designs,
        prioritizing adaptability and user-centric design principles. Eager to
        contribute my diverse skill set to innovative projects, I am actively
        seeking opportunities as a Fresh Frontend Developer. Let's connect and
        explore how I can bring my passion for development to your team!
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem;
  color: white;

  h2 {
    font-size: 2rem;
    color: black;
  }

  h6 {
    font-size: 1.2rem;
    color: rgb(179, 73, 255);
  }

  p {
    font-family: "Josefin Sans", sans-serif;
    margin-top: 0.5rem;
    line-height: 1.8rem;
    font-size: 1.5rem;
    color: black;
  }

  span {
    font-family: "Whisper", cursive;
    font-size: 3.5rem;
    color: rgb(179, 73, 255);
  }
`;

export default Description;
