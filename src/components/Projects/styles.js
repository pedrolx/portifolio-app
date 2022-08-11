import styled from "styled-components";

export const Slider = styled.ul`
  @media screen and (min-width: 769px) {
    width: 100%;
    height: 85%;

    position: absolute;
    top: 4.5rem;
    left: 0rem;

    display: flex;

    overflow-x: scroll;

    gap: 1rem;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 85%;

    position: absolute;
    top: 5.5rem;

    display: flex;

    overflow-x: scroll;

    gap: 1rem;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }
`;

export const SliderLi = styled.li`
  @media screen and (min-width: 769px) {
    width: 98%;
    height: 100%;

    scroll-snap-align: start;

    pointer-events: none;

    flex: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: center;

    text-align: center;
    font-size: 2rem;

    gap: 1rem;

    border-radius: 1rem;

    background-color: var(--primary-color);

    filter: opacity(0.98);

    color: var(--white-color);

    img {
      width: 80%;
      height: 75%;

      border-radius: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;

    scroll-snap-align: start;

    pointer-events: none;

    flex: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    text-align: center;
    font-size: 1rem;

    gap: 0.1rem;

    border-radius: 1rem;

    background-color: var(--primary-color);

    filter: opacity(0.98);

    color: var(--white-color);

    img {
      width: 90%;
      height: 40%;

      border-radius: 1rem;
    }
  }
`;
