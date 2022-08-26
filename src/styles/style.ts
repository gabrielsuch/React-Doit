import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle `
    :root {
        --color-primary: #8615DF;
        --color-primary-two: #570E91;
        --color-secondary: #38085C;
        --color-secondary-two: #190429;
        --color-title: #0E0E0F;
        --color-text: #666665;
        --color-placeholder: #9E9EA7;
        --color-error: #DF1545;
        --color-success: #168821;
        --color-base-default: #FFFFFF;
        --color-gray: #E0E0E0;


        --font-size-heading-one: 38px;
        --font-size-heading-two: 34px;
        --font-size-heading-three: 24px;
        --font-size-heading-four: 20px;
        --font-size-headline: 16px;
        --font-size-body: 14px;
        --font-size-caption: 12px;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    html {
        font-size: var(--font-size-heading-body);
    }

    body {
        background-color: var(--color-base-default);
    }
`

export default GlobalStyle