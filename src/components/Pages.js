import React from "react";
import styled from "styled-components";
//Gifs
import aipage from "../assets/gifs/aipage.gif";
import clockapp from "../assets/gifs/clockapp.gif";
import coffee from "../assets/gifs/coffee.gif";
import dictionary from "../assets/gifs/dictionary.gif";
import huskypage from "../assets/gifs/huskypage.gif";
import library from "../assets/gifs/library.gif";
import movie from "../assets/gifs/movie.gif";
import restaurant from "../assets/gifs/restaurant.gif";
import weatherjs from "../assets/gifs/weatherjs.gif";
import weatherreact from "../assets/gifs/weatherreact.gif";
import hobby from "../assets/gifs/hobby.gif";
import travel from "../assets/gifs/travel.gif";
//img
import marek from "../assets/marek.jpg";
import lilaflower from "../assets/lilaflower.png";

const Pages = () => {
  return (
    <PagesStyled>
      <ProjectsTitleStyled>
        <h1>Projects</h1>
        <img className="logo" src={lilaflower} alt="logo" />
      </ProjectsTitleStyled>
      <ProjectsStyled>
        <CSSChildrenBox>
          <img src={aipage} alt="aipage" />
          <h6>AI Project!</h6>
          <a href="https://majestic-brigadeiros-5d6e59.netlify.app/">
            Website here
          </a>
          <p>This website is builded with React, API, AI and Boostrap.</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={clockapp} alt="clockapp" />
          <h6>ClockApp!</h6>
          <a href="https://majestic-timeclock-dd3ebf.netlify.app/">
            Website Here
          </a>
          <p>This website was builded with HTML,CSS and JavaScript.</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={coffee} alt="coffee" />
          <h6>EnjoyCoffee!</h6>
          <a href="https://coffee-majestic-afef0e.netlify.app/">Website Here</a>
          <p>This website was builded with HTML,CSS and JavaScript.</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={dictionary} alt="dictionary" />
          <h6>Dictionary!</h6>
          <a href="https://fascinating-madeleine-4817fb.netlify.app/">
            Website Here
          </a>
          <p>This website is builded with React and API</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={huskypage} alt="husky" />
          <h6>Husky Page</h6>
          <a href="https://lively-entremet-91623d.netlify.app/">Website Here</a>
          <p>This website is builded with HTML, CSS, JAVASCRIPT, Boostrap</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={library} alt="library" />
          <h6>Library!</h6>
          <a href="https://sage-blini-d7544b.netlify.app/">Website Here</a>
          <p>This website is builded with HTML, CSS, JAVASCRIPT,</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={movie} alt="movie" />
          <h6>Movie!</h6>
          <p>This website is builded with HTML, CSS, JAVASCRIPT and API.</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={restaurant} alt="restaurant" />
          <h6>Bakery!</h6>
          <a href="https://www.shecodes.io/contests/favorite-restaurant-challenge/contest_entries/fernanda-santiago-portuguese/preview">
            Website Here
          </a>
          <p>This website is builded with HTML, CSS, JAVASCRIPT</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={weatherjs} alt="weatherjs" />
          <h6>Weather JavaScrpt!</h6>
          <a href="https://poetic-weather-429797.netlify.app/">Website Here</a>
          <p>This website is builded with HTML, CSS, REACT and API</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={weatherreact} alt="weatherreact" />
          <h6>Weather React!</h6>
          <a href="https://gorgeous-wisp-5d0047.netlify.app/">Website Here</a>
          <p>This website is builded with React and API,</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={hobby} alt="hobby" />
          <h6>Reading Page!</h6>
          <a href="https://www.shecodes.io/contests/hobby-challenge/contest_entries/fernanda-santiago-american-d72ad824-9a7b-436e-aa1a-db364171fd23/preview">
            Website Here
          </a>
          <p>TThis website was builded with HTML,CSS and JavaScript.</p>
        </CSSChildrenBox>
        <CSSChildrenBox>
          <img src={travel} alt="travel" />
          <h6>Travel to New York!</h6>
          <a href="https://www.shecodes.io/contests/dream-travel-destination-challenge/contest_entries/fernanda-santiago-american/preview">
            Website Here
          </a>
          <p>This website was builded with HTML,CSS and JavaScript.</p>
        </CSSChildrenBox>
      </ProjectsStyled>
    </PagesStyled>
  );
};

const PagesStyled = styled.div`
  background-color: #f7f8f9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ProjectsTitleStyled = styled.div`
  background-image: url(${marek});
  height: 30vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 5rem;
  align-items: center;
  font-family: "Whisper", cursive;

  h1 {
    font-size: 14rem;
    color: white;
  }

  img {
    width: 18%;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 10rem;
    }
    margin: auto;
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 6rem;
    }

    img {
      display: none;
    }
  }
`;

const CSSChildrenBox = styled.div`
  margin: 2rem;
  background: rgb(248, 249, 250);
  min-height: 30vh;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  color: black;

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }

  h6 {
    font-size: 3rem;
    font-family: "Whisper", cursive;
    margin-top: 1rem;
    color: rgb(179, 73, 255);
    font-weight: 900;
  }

  p {
    padding: 1rem;
  }
  @media (max-width: 900px) {
    margin: 1rem;
  }
`;

const ProjectsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    justify-content: center;
    display: block;
    margin: auto;
  }
`;
export default Pages;
