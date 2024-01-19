import React from "react";
//Styled
import styled from "styled-components";
//imgs
import contact from "../assets/contactwallp.jpg";
import disc from "../assets/brands/disc.jpg";
import goo from "../assets/brands/goo.jpg";
import link from "../assets/brands/link.png";
//component

const Contact = () => {
  return (
    <ContactPageStyled>
      <ContactSectionstyled>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={disc} className="card-img-top" alt="discord" />
              <div className="card-body">
                <h5 className="card-title">You can contact me on Discord!</h5>
                <p className="card-text">@feerjs</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last time online 1 mins ago.
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={goo} className="card-img-top" alt="google" />
              <div className="card-body">
                <h5 className="card-title">You can contact me on Gmail!</h5>
                <p className="card-text">wisefjs@gmail.com</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last time online 21 mins ago.
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={link} className="card-img-top" alt="linkedin" />
              <div className="card-body">
                <h5 className="card-title">You can contact me on Linkedin!</h5>
                <a
                  className="card-text"
                  href="https://www.linkedin.com/in/fernanda-j-santiago-b93b07265/"
                >
                  Profile Here.
                </a>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last time online 3 mins ago.
                </small>
              </div>
            </div>
          </div>
        </div>
      </ContactSectionstyled>
    </ContactPageStyled>
  );
};

const ContactPageStyled = styled.div`
  overflow: hidden;
  height: 90vh;
  margin: auto;
  background-image: url(${contact});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 900px) {
    height: 100%;
  }
`;

const ContactSectionstyled = styled.div`
  margin: auto;
  padding: 4rem;

  .row {
    @media (max-width: 900px) {
      width: 100%;
      padding: 1rem;
      display: block;
      justify-content: center;
    }
  }

  .col {
    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .card {
    margin-top: 4rem;
  }

  @media (max-width: 900px) {
    margin: 0;
    padding: 1rem;
  }
`;

export default Contact;
