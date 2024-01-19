import styled from "styled-components";

export const Image = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  display: flex;
  overflow: hidden;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 0.5rem;
    overflow: visible;
  }
`;

export const CSSProfile = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const CSSInfo = styled.div`
  flex: 1;
  padding-right: 3rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  p {
    font-size: 1.5rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
  }
`;
