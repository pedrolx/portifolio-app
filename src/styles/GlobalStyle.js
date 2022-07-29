import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400;500;600;700&display=swap');

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

        font-family: 'Edu VIC WA NT Beginner', cursive;

        list-style: none;

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
    }
`;
