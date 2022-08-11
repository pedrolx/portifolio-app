import styled, { keyframes } from "styled-components";

const appers = keyframes` 
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 769px) {
    max-width: 100vw;
    height: 100vh;

    background-image: url(${(props) => props.img});
    background-size: contain;
    background-position: top center;

    animation: ${appers} 1s linear;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;

    background-image: url(${(props) => props.img});
    background-size: contain;
    background-position: top center;

    animation: ${appers} 1s linear;
  }
`;
