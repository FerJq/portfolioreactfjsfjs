import React from "react";
//Styled
import styled from "styled-components";
import backskills from "../assets/backskills.jpg";
import flower from "../assets/flower.webp";

function Skills() {
  return (
    <SkillContainerStyled>
      <HeaderStyled>
        <h2>Skills and Equipment</h2>
      </HeaderStyled>
      <SkillPageStyled>
        <SkillStyled>
          <div>
            <i className="fa-brands fa-js"></i>
            <p>JavaScript</p>
          </div>
          <div>
            <i className="fa-brands fa-bootstrap"></i>
            <p>Boostrap</p>
          </div>

          <div>
            <i className="fa-solid fa-desktop"></i>
            <p>Responsive Web Design</p>
          </div>
          <img src={flower} alt="flowers" />
          <div>
            <i className="fa-brands fa-figma"></i>
            <p>Figma</p>
          </div>
          <div>
            <i className="fa-brands fa-react"></i>
            <p>React</p>
          </div>

          <div>
            <i className="fa-solid fa-code"></i>
            <p>Visual Code Studio</p>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
            <p>GitHub</p>
          </div>
          <div>
            <i className="fa-solid fa-image"></i>
            <p>SVG</p>
          </div>
          <div>
            <i className="fa-solid fa-robot"></i>
            <p>Artificial Inteligent</p>
          </div>
          <div>
            <i class="fa-solid fa-camera"></i>
            <p>Photoshop</p>
          </div>
        </SkillStyled>
        <EquipmentStyled>
          <h2>Current Equipment</h2>
          <ul>
            <li>
              <span>Operating System:</span> Windows 11 Home Single Language
              64-bit (10.0, Build 22621) (22621.ni_release.220506-1250)
            </li>
            <li>
              <span>Language:</span> English (Regional Setting: English)
            </li>
            <li>
              <span>System Manufacturer:</span> iBUYPOWER
            </li>
            <li>
              <span>System Model:</span> 13th Gen Intel(R) Core(TM) i9-13900KF
            </li>
            <li>
              <span>BIOS:</span> 6.01 (type: UEFI)
            </li>
            <li>
              <span>Processor:</span> 13th Gen Intel(R) Core(TM) i9-13900KF (32
              CPUs), ~3.0GHz
            </li>
            <li>
              <span>Memory:</span> 32768MB RAM
            </li>
            <li>
              <span>Available OS Memory:</span> 32596MB RAM
            </li>
            <li>
              <span>Page File:</span> 59566MB used, 9893MB available
            </li>
            <li>
              <span>Windows Dir:</span> C:\Windows
            </li>
            <li>
              <span>DirectX Version:</span> DirectX 12
            </li>
            <li>
              <span>DX Setup Parameters:</span> Not found
            </li>
            <li>
              <span>User DPI Setting:</span> 96 DPI (100 percent)
            </li>
            <li>
              <span>System DPI Setting:</span> 96 DPI (100 percent)
            </li>
            <li>
              <span>DWM DPI Scaling:</span> Disabled
            </li>
            <li>
              <span>Miracast:</span> Available, no HDCP
            </li>
            <li>
              <span>Microsoft Graphics Hybrid:</span> Not Supported
            </li>
            <li>
              <span>DirectX Database Version:</span> 1.4.7
            </li>
            <li>
              <span>Card name:</span> NVIDIA GeForce RTX 4070
            </li>
            <li>
              <span>Manufacturer:</span> NVIDIA
            </li>
            <li>
              <span>Chip type:</span> NVIDIA GeForce RTX 4070
            </li>
            <li>
              <span>Monitor Name:</span> Generic PnP Monitor
            </li>
            <li>
              <span>Monitor Model:</span> Sceptre F24
            </li>
            <li>
              <span>Monitor Name:</span> Generic PnP Monitor
            </li>
            <li>
              <span>Monitor Model:</span> ARZOPA
            </li>
          </ul>
        </EquipmentStyled>
      </SkillPageStyled>
    </SkillContainerStyled>
  );
}
const SkillContainerStyled = styled.div`
  background-image: url(${backskills});
  background-repeat: no-repeat;
  background-size: cover;
`;

const SkillPageStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    justify-content: center;
    display: block;
    margin: auto;
  }
`;
const SkillStyled = styled.div`
  margin: 2rem;
  div {
    display: flex;
    text-align: center;
    align-items: center;
    margin-top: 1rem;
    color: black;
    font-weight: 600;
    background-color: rgb(248, 249, 250);
    padding: 0.5rem;
    border-top-right-radius: 20px;
    box-shadow: 5px 0 5px #e5e5e5;
  }

  p {
    font-size: 1rem;
  }

  i {
    color: rgb(179, 73, 255);
    font-size: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  img {
    position: absolute;
    left: 15rem;
    width: 35%;

    z-index: 2;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const EquipmentStyled = styled.div`
  margin: 2rem;
  line-height: 1%.9;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #e5e5e5;
  background-color: rgb(248, 249, 250);
  h2 {
    color: rgb(179, 73, 255);
    font-family: "Whisper", cursive;
    font-size: 4rem;
    text-align: center;
  }

  ul {
    list-style-type: none;
  }
  li {
    font-size: 1.2rem;
    font-weight: 400;

    span {
      color: rgb(179, 73, 255);
      font-weight: 500;
    }
  }
`;

const HeaderStyled = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #b349ff;
  padding: 1rem;
  color: white;
  font-weight: 800;
  text-align: center;
  border-bottom-right-radius: 40px;
  border-top-right-radius: 40px;
  max-width: 50%;
  margin-top: 2rem;
  @media (max-width: 1000px) {
    max-width: 80%;
  }
`;
export default Skills;
