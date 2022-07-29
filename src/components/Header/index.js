import { useNavigate, Link } from "react-router-dom";
import { ButtonsDiv, HeaderContainer, LogoDiv } from "./style";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <LogoDiv>
        <h1 onClick={() => navigate("/")}>
          {"<"}PL{"/>"}
        </h1>
      </LogoDiv>
      <ButtonsDiv>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/projects")}>Projetos</button>
        <button>
          <a href="https://www.linkedin.com/in/pedro-lucas-xavier/">Linkedin</a>
        </button>
        <button>
          <a href="https://github.com/pedrolx">GitHub</a>
        </button>
      </ButtonsDiv>
    </HeaderContainer>
  );
};
