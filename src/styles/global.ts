import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root.light{

}

:root.dark{

}


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
