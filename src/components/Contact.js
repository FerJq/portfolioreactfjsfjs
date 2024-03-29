import React from "react";
//Styled
import styled from "styled-components";
//imgs
import disc from "../assets/brands/disc.jpg";
import goo from "../assets/brands/goo.jpg";
import link from "../assets/brands/link.png";

const Contact = () => {
  return (
    <ContactPageStyled>
      <ContactSectionstyled>
        <div />
        <h1>Contact me</h1>
        <section>
          <ul>
            <li>
              <h6>Gmail</h6>
              <img src={goo} alt="gmail" />
              <a href="mailto:wisefjsgmail.com">Click Here</a>
            </li>
            <li>
              <h6>Discord</h6>
              <img src={disc} alt="discord" />
              <a href="https://discord.com/">@ferjsant</a>
            </li>
            <li>
              <h6>Linkedin</h6>
              <img src={link} alt="linkedin" />
              <a href="https://www.linkedin.com/in/fernanda-j-santiago-b93b07265/">
                Click Here
              </a>
            </li>
          </ul>
        </section>
      </ContactSectionstyled>
    </ContactPageStyled>
  );
};

const ContactPageStyled = styled.div`
  background-color: #f7f8f9;
  overflow: hidden;
  margin: auto;
`;

const ContactSectionstyled = styled.div`
  text-align: center;
  margin: 1rem;
  overflow: hidden;

  div {
    margin: 3rem;
    height: 2px;
    background-color: #b349ff;
  }

  h1 {
    font-family: "Whisper", cursive;
    font-weight: 700;
    font-size: 3rem;
  }

  ul {
    overflow: hidden;
    display: flex;
    list-style: none;
    align-items: center;
    text-align: center;
    justify-content: center;

    @media (max-width: 520px) {
      display: block;
      padding: 0;
    }

    li {
      display: grid;
      grid-template-columns: 1fr;
      font-weight: 800;
      margin: 2rem;

      a {
        font-weight: 400;
        margin-top: 1rem;
      }

      p {
        font-weight: 400;
        margin-top: 1rem;
      }

      img {
        width: 100%;
        height: 15vh;
        border-radius: 20px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

        @media (max-width: 720px) {
          display: none;
        }
      }

      h6 {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 900px) {
    padding: 1rem;
  }

  @media (max-width: 520px) {
    display: block;
    margin: 0 auto;
  }
`;

export default Contact;
