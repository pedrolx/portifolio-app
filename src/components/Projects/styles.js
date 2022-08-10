import styled from "styled-components";

export const Slider = styled.ul`
  @media screen and (min-width: 769px) {
    width: 1200px;
    height: 600px;

    position: absolute;
    top: 4.5rem;
    left: 4rem;

    display: flex;

    overflow-x: hidden;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 4.5rem;

    display: flex;

    overflow-x: scroll;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  /* &::-webkit-scrollbar {
    height: 12px;
    width: 12px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar:horizontal {
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    border: 1px #787878 solid;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 6px #c8c8c8 inset;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0a4390;
    border: 1px solid #ffffff;
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #bf4649;
    border: 1px solid #333333;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #0a4390;
    border: 1px solid #96c9ff;
  } */
`;

export const SliderLi = styled.li`
  @media screen and (min-width: 769px) {
    width: 100%;
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
    width: 100vw;
    height: 100vh;

    scroll-snap-align: start;

    pointer-events: none;

    flex: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: center;

    text-align: center;
    font-size: 1rem;

    gap: .1rem;

    background-color: var(--primary-color);

    filter: opacity(0.98);

    color: var(--white-color);

    img {
      width: 90%;
      height: 50%;

      border-radius: 1rem;
    }
  }
`;
