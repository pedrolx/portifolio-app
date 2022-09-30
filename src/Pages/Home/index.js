import { useState } from "react";
import "./styles";
import {
  Container,
  TechIcons,
  TechImg,
  MessageContainer,
  AboutMeMessage,
  AboutMeContainer,
  StyledButon,
} from "./styles";
import b_image from "../../imgs/b_image.png";
import { BsWhatsapp } from "react-icons/bs";
import { FaHtml5, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs, GrNode } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { PhotoContainer } from "../../components/Header/PhotoContainer";
import { Animation } from "../../lottie";

export const Home = () => {
  const [img, setImg] = useState(b_image);
  const [message, setMessage] = useState("About me");

  const navigate = useNavigate();

  return (
    <Container img={img}>
      <Header />
      <PhotoContainer />
      <TechIcons></TechIcons>
      <TechImg>
        <li onClick={() => setMessage("HTML")}>
          <FaHtml5 />
        </li>
        <li onClick={() => setMessage("Git")}>
          <FaGithub />
        </li>
        <li onClick={() => setMessage("JS")}>
          <TbBrandJavascript />
        </li>
        <li onClick={() => setMessage("React")}>
          <GrReactjs />
        </li>
        <li onClick={() => setMessage("Node")}>
          <GrNode />
        </li>
      </TechImg>
      <MessageContainer />
      <AboutMeMessage>
        {message === "About me" ? (
          <>
            <Animation name="coding" />
            <AboutMeContainer>
              <p>
                Tive contato com a área de tecnologia na adolescência, na época
                apenas editava posts e textos com HTML por diversão. Desde então
                acompanho a área e hoje em dia estou estudando Desenvolvimento
                FullStack e buscando me aperfeiçoar a cada dia para me destacar
                cada vez mais nessa área, onde cada aprendizado aumenta o brilho
                nos olhos.
              </p>
              <p>Vamos conversar;</p>
              <ul>
                <li>
                  <a href="mailto:pedrolucas.xs@gmail.com?">
                    <MdEmail />
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5531936181924&text=Ol%C3%A1!%20Prazer%20em%20te%20conhecer.">
                    <BsWhatsapp />
                  </a>
                </li>
              </ul>
            </AboutMeContainer>
          </>
        ) : (
          <></>
        )}
        {message === "Git" ? (
          <>
            <AboutMeContainer>
              <Animation name="github" />
              <p>GitHub</p>
              <p>
                Desde o início da minha formação na área de tecnologia tive
                contato com o git para realizar das mais simples atividades até
                os projetos em equipe mais complexos onde foi necessário mais
                organização para minimizar conflitos e torná-los mais fáceis de
                lidar caso aconteçam.
              </p>
            </AboutMeContainer>
            <StyledButon onClick={() => setMessage("About me")}>
              Retornar
            </StyledButon>
          </>
        ) : (
          <></>
        )}
        {message === "HTML" ? (
          <>
            <AboutMeContainer>
              <Animation name="csshtml" />
              <p>HTML - CSS</p>
              <p>
                Tive um primeiro contato com o HTML na minha adolescência,
                editando textos e posts em fóruns. Na época somente por
                diversão. Exercitei muito o conhecimento em HTML por testar e
                ver vídeos sobre o assunto, já hoje em dia, adquiri conhecimento
                mais profissional sobre essa linguagem de marcação, que quando
                bem estruturada nos permite a criação de sites bonitos,
                funcionais e responsivos.
              </p>
            </AboutMeContainer>
            <p></p>
            <StyledButon onClick={() => setMessage("About me")}>
              Retornar
            </StyledButon>
          </>
        ) : (
          <></>
        )}
        {message === "JS" ? (
          <>
            <AboutMeContainer>
              <Animation name="js" />
              <p>JavaScript</p>
              <p>
                Através de cursos livres tive um contato inicial com javascript
                quando comecei a me interessar pela área de programação. Na
                minha formação exercitei o JavaScript puro no módulo um e dois,
                integrando ele ao HTML para adicionar algumal ógica específica e
                criando os conteúdos do HTML através do JavaScript para criação
                de soluções mais dinâmicas e que contenham dados mais extensos
                para trabalhar.
              </p>
            </AboutMeContainer>
            <StyledButon onClick={() => setMessage("About me")}>
              Retornar
            </StyledButon>
          </>
        ) : (
          <></>
        )}
        {message === "React" ? (
          <>
            <AboutMeContainer>
              <Animation name="react" />
              <p>React</p>
              <p>
                O React foi a tecnologia que eu mais me identifiquei na
                trajetória FullStack, pela possibilidade de criar aplicações
                grandes e complexas de forma reativa, e possibilitando
                proporcionar ao usuário uma interação mais chamativa com a
                aplicação, seja estilizando tudo do zero ou utilizando
                bibliotecas que possam se integrar à aplicação de forma
                harmônica.
              </p>
            </AboutMeContainer>
            <StyledButon onClick={() => setMessage("About me")}>
              Retornar
            </StyledButon>
          </>
        ) : (
          <></>
        )}
        {message === "Node" ? (
          <>
            <AboutMeContainer>
              <Animation name="nodejs" />
              <p>Node.JS</p>
              <p>
                Exercitei o Node junto com express e utilizando o PostgreSQL para criar API's em diversas atividades porpostas. No trabalho final contruí junto com minha equipe do projeto, uma API que gerencia organizações, guardando seus usuários, donos e administradores, cada um com suas permissões, possibilidade de ter posts e comentários, assim como um sistema proprio de agendamento de reuniões que se baseava em uma análise da disponibilidade que cada usuário da organização tinha.
              </p>
            </AboutMeContainer>
            <StyledButon onClick={() => setMessage("About me")}>
              Retornar
            </StyledButon>
          </>
        ) : (
          <></>
        )}
      </AboutMeMessage>
    </Container>
  );
};
