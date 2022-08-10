import styled from "styled-components";

export const HeaderContainer = styled.div`
  @media screen and (min-width: 769px) {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: var(--primary-color);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: var(--primary-color);
  }
`;

export const LogoDiv = styled.div`
  @media screen and (min-width: 769px) {
    width: 30%;

    color: var(--secondary-color);

    h1:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    width: 30%;

    color: var(--secondary-color);

    h1:hover {
      cursor: pointer;
    }
  }
`;

export const ButtonsDiv = styled.div`
  @media screen and (min-width: 769px) {
    height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    height: 2.5rem;
    width: 6rem;

    background-color: var(--white-color);
    color: var(--primary-color);

    border: none;
    border-radius: 0.5rem;

    font-size: 1.1rem;
    font-weight: 400;
  }

  button:hover {
    cursor: pointer;
    filter: opacity(0.7);

    height: 100%;
    width: 33.33%;

    border-radius: 0;

    transition: 1s;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  &&:hover {
    cursor: pointer;

    button {
      height: 100%;
      width: 33.33%;

      border-radius: 0;

      transition: 0.6s;
    }
  }
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    height: 2.5rem;
    width: 6rem;

    background-color: var(--white-color);
    color: var(--primary-color);

    border: none;

    font-size: 0.8rem;
    font-weight: 400;

    border: 1px solid var(--primary-color);
  }

  button:hover {
    cursor: pointer;
    filter: opacity(0.7);

    height: 100%;
    width: 33.33%;

    border-radius: 0;

    transition: 1s;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  &&:hover {
    cursor: pointer;

    button {
      height: 100%;
      width: 33.33%;

      border-radius: 0;

      transition: 0.6s;
    }
  }
  }
`;
