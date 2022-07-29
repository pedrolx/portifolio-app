import { useState } from "react";
import "./styles";
import { Container } from "./styles";
import b_image2 from "../../imgs/b_image2.png";
import { HeaderContainer } from "../Home/styles";
import { FaLaptopCode } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProjectsList } from "../../components/Projects";

export const Projects = () => {
  const [img, setImg] = useState(b_image2);

  const navigate = useNavigate();

  return (
    <Container img={img}>
      <Header/>
      <ProjectsList/>
    </Container>
  );
};
