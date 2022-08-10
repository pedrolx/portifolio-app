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
    }
`;
