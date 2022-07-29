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
  width: 100vw;
  height: 100vh;

  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: top center;

  animation: ${appers} 1s linear;
`;
