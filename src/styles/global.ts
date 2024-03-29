import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --green: #33CC95; 
        --red: #E62E4D;
        --blue: #5429CC;
        
        --blue-light: #6933FF;

        --text-titles: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }


    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, *::before, *::after {
	    box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        @media (max-width: 75em) { font-size: 60% }
        @media (max-width: 61.25em) { font-size: 58% }
        @media (max-width: 28.75em) { font-size: 55% }
    }

    body {
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        background: var(--background);
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button { 
        cursor: pointer;
    }

    img {
        display: block;
        max-width: 100%;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0 , 0, .5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 4.8rem;
        position: relative;
        border-radius: .4rem;
    }   

    .react-modal-close {
        position: absolute;
        right: 2.4rem;
        top: 2.4rem;
        border: 0;
        background: transparent;

        transition: filter .2s ease-out;

        &:hover {
            filter: brightness(.8);
        }
    }

`