import React from "react";
//Styled
import styled from "styled-components";
//Animation

const Navbar = () => {
  return (
    <CssNav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            FjS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.shecodes.io/graduates/64928-fernanda-santiago"
                >
                  SheCodes Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/fernanda-j-santiago-b93b07265/"
                >
                  Linkedin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/FerJq">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </CssNav>
  );
};

const CssNav = styled.nav`
  position: sticky;
  .navbar-brand {
    color: rgb(179, 73, 255);
    font-weight: bolder;
    font-family: "Whisper", cursive;
    font-size: 2rem;
  }
`;

export default Navbar;
