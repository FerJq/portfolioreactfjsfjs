import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  function openNewTAB(url) {
    window.open(url, "_blank");
  }
  return (
    <CSSFooter>
      <i className="fa-solid fa-snowflake"></i>
      <h6>
        Made with love by{" "}
        <span>
          <Link
            to={openNewTAB(
              "https://www.linkedin.com/in/fernanda-j-santiago-b93b07265/"
            )}
          >
            Fernanda J. Santiago
          </Link>
        </span>
      </h6>
      <i className="fa-solid fa-snowflake"></i>
    </CSSFooter>
  );
};

const CSSFooter = styled.nav`
  min-height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(248, 249, 250);
  z-index: 10;
  text-align: center;

  i {
    color: rgb(179, 73, 255);
    margin: 1rem;
    font-size: 1rem;
  }

  h6 {
    color: black;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1rem;
  }

  span {
    font-family: "Whisper", cursive;
    font-size: 1.5rem;
    color: rgb(179, 73, 255);
    font-weight: 600;
  }
`;

export default Footer;
