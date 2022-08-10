import { Container, GifDiv, Name, PhotoDiv } from "./styles";
import photo from "../../../imgs/photo.jpg";
import { useState } from "react";

export const PhotoContainer = () => {
  const [photoImg] = useState(photo);
  return (
    <>
      <Container></Container>
      <PhotoDiv>
        <img src={photo} alt="Pedro Lucas"/>
      </PhotoDiv>
      <Name>
        <h2>Pedro Lucas X. e Santos</h2>
      </Name>
    </>
  );
};
