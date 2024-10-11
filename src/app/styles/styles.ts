import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    ul,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    li,
    p {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        margin:0;
        padding:0
    }
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }
`;
