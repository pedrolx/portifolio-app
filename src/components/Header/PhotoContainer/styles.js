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
`

export const Container = styled.div`
  width: 80%;
  height: 100px;

  background-color: var(--primary-color);

  border-radius: 10rem 0 10rem 0;

  position: absolute;

  top: 5rem;

  left: 7rem;

  animation: ${comeFromLeft} 1s linear;
`;

export const PhotoDiv = styled.div`
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
`;

export const Name = styled.div`
  width: 30%;
  height: 100px;

  position: absolute;
  top: 6.6rem;
  left: 36rem;

  animation: ${comeFromTop} 1s linear;


  h2 {
    color: var(--white-color);
  }
`;
