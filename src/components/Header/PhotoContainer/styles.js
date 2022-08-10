import styled, { keyframes } from "styled-components";

const comeFromLeft = keyframes` 
    from {
        filter: opacity(0);
        left: -60rem;
    }

    to {
        filter: opacity(1);
        left: 7rem
    }
`;

const comeFromRight = keyframes` 
    from {
        filter: opacity(0);
        left: 100rem;
    }

    to {
        filter: opacity(1);
        left: 14rem
    }
`;

const comeFromTop = keyframes` 
    from {
        filter: opacity(0);
        top: -10rem;
    }

    to {
        filter: opacity(1);
        top: 5rem;
    }
`;

export const Container = styled.div`
  @media screen and (min-width: 769px) {
    width: 80%;
    height: 100px;

    background-color: var(--primary-color);

    border-radius: 10rem 0 10rem 0;

    position: absolute;

    top: 5rem;

    left: 7rem;

    animation: ${comeFromLeft} 1s linear;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    height: 100px;

    background-color: var(--primary-color);

    border-radius: 10rem 0 10rem 0;

    position: absolute;

    top: 6.5rem;

    left: 1rem;

    animation: ${comeFromLeft} 1s linear;
  }
`;

export const PhotoDiv = styled.div`
  @media screen and (min-width: 769px) {
    width: 10%;
    height: 100px;

    position: absolute;
    top: 5rem;
    left: 12rem;

    animation: ${comeFromRight} 1s linear;

    img {
      width: 100%;
      height: 100%;

      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }
  }
  @media screen and (max-width: 768px) {
    width: 30%;
    height: 100px;

    position: absolute;
    top: 6.5rem;
    left: 6rem;

    animation: ${comeFromRight} 1s linear;

    img {
      width: 100%;
      height: 100%;

      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }
  }
`;

export const Name = styled.div`
  @media screen and (min-width: 769px) {
    width: 30%;
    height: 100px;

    position: absolute;
    top: 6.6rem;
    left: 36rem;

    animation: ${comeFromTop} 1s linear;

    h2 {
      color: var(--white-color);
    }
  }
  @media screen and (max-width: 768px) {
    width: 30%;
    height: 100px;

    position: absolute;
    top: 7.5rem;
    left: 13.5rem;

    animation: ${comeFromTop} 1s linear;

    h2 {
      color: var(--white-color);
      font-size: 1.2rem;
    }
  }
`;
