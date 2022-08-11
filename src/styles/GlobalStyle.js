import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    :root {
        --primary-color: rgb(0,5,52);
        --secondary-color: rgb(160,206,249);
        --red-color: rgb(144,22,25);
        --redlight-color: rgb(155,146,145);
        --white-color: rgb(255,255,255);
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: 'PT Sans', sans-serif;

        list-style: none;
    }

    ::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #00567a;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #0055ff;
}
::-webkit-scrollbar-thumb:active {
  background: #003d75;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;

export default GlobalStyle;
