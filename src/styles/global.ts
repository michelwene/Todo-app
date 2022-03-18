import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
--color-status:hsl(220, 98%, 61%);
--bg-check:linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%));
--color-title:hsl(0, 0%, 98%);
--bg-list: hsl(0, 0%, 98%);
--bg-light-gray:hsl(236, 33%, 92%);
--light-gray:hsl(233, 11%, 84%);
--dark-gray-blue:hsl(236, 9%, 61%);
--color-text-list:hsl(235, 19%, 35%);
}

/* :root-dark{
--bg-dark-blue: hsl(235, 21%, 11%);
--bg-list: hsl(235, 24%, 19%);
--color-task: hsl(234, 39%, 85%);
--color-taks-hover:hsl(236, 33%, 92%);
--color-text: hsl(234, 11%, 52%);
--bg-ball:hsl(233, 14%, 35%);
--shadow:hsl(237, 14%, 26%);
} */



*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-family:'Josefin Sans', sans-serif ;
    max-width: 1440px;

    @media (max-width: 1080px){

        font-size: 93.75%;

    }

    @media (max-width: 720px){

font-size: 87.5%;

}

}

body{
    -webkit-font-smoothing: antialiased;
}

button{
    cursor: pointer;

}

[disable]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
