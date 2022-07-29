import styled from "styled-components";

export const Slider = styled.ul`
  width: 1200px;
  height: 600px;

  position: absolute;
  top: 4.5rem;
  left: 4rem;

  display: flex;

  overflow-x: auto;

  -webkit-overflow-scrolling: touch;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

export const SliderLi = styled.li`
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

  border-radius: 1rem;

  filter: opacity(0.99);

  color: var(--white-color);

  img {
    width: 80%;
    height: 75%;

    border-radius: 1rem;
  }
`;
