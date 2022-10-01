import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background-color: #000;
    }

    ::-webkit-scrollbar {
        width: 0.4rem;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #1e50bc;
    }
    ::-webkit-scrollbar-track {
        background-color: #777;
    }
`;
