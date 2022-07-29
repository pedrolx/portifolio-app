import styled, { keyframes } from "styled-components";
import back_message from "../../imgs/back_message1.gif";

const appers = keyframes` 
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const comeFromTop = keyframes` 
    from {
        filter: opacity(0);
        top: -10rem;
    }

    to {
        filter: opacity(1);
        top: 12rem;
    }
`;

const resize = keyframes` 
  from {
    transform: scale(0);
    filter: opacity(0);
  }

  to {
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

export const TechIcons = styled.div`
  width: 7%;
  height: 65%;

  position: absolute;
  top: 12rem;
  left: 7rem;

  border-radius: 0 0 0 1rem;

  background-color: var(--primary-color);

  animation: ${comeFromTop} 1s linear;
`;

export const TechImg = styled.ul`
  width: 7%;
  height: 65%;

  position: absolute;
  top: 12rem;
  left: 7rem;

  border-radius: 0 0 0 1rem;

  background-color: var(--primary-color);

  animation: ${appers} 1s linear;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  li {
    width: 100%;
    height: 25%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--secondary-color);

    font-size: 2rem;
  }

  li:hover {
    cursor: pointer;

    background-color: var(--secondary-color);

    color: var(--primary-color);

    transform: scale(0.9);

    font-size: 2.7rem;

    transition: 0.5s linear;
  }
`;

export const MessageContainer = styled.div`
  width: 71.49%;
  height: 65%;

  background-color: var(--primary-color);

  filter: opacity(0.97);

  position: absolute;
  top: 12rem;
  left: 14rem;

  border-radius: 0 1rem 1rem 0;

  animation: ${resize} 1s linear;
`;

export const AboutMeMessage = styled.div`
  position: absolute;
  top: 12rem;
  left: 14rem;

  padding: 2rem;

  color: var(--white-color);
  font-size: 2rem;

  width: 71.49%;
  height: 65%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  animation: ${resize} 1s linear;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: justify;

  gap: 1rem;

  p {
    font-size: 1rem;
  }

  ul {
    height: 3rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  ul li a {
    text-decoration: none;
    color: var(--white-color);
  }
`;

export const StyledButon = styled.button`
  width: 7rem;
  height: 2rem;

  border: none;
  border-radius: 0.5rem;

  background-color: var(--white-color);
  color: var(--primary-color);

  font-weight: 600;

  &&:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;
