import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, var(--color-secondary) 0% 65%, var(--color-base-default) 65% 100%);

    @media (max-width: 750px) {
        background: linear-gradient(to bottom, var(--color-secondary) 0% 40%, var(--color-base-default) 40% 100%);
        flex-direction: column;
    }
`

export const Info = styled.div `
    width: 30%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 750px) {
        max-width: 500px;
        width: 100%;
        display: flex;
        align-items: flex-start;
    }
`

export const DescriptionInfo = styled.div `
    margin: 40px 0px;
    color: #FFFFFF;

    p {
        margin: 20px 0px;
        max-width: 230px;

        span {
            font-weight: 800;
        }
    }

    @media (max-width: 750px) {
        margin: 0px;
    }
`

export const Logo = styled.div `
    max-width: 255px;
    width: 100%;
    height: 100px;

    img {
        width: 150px;
        height: 100px;

        @media (max-width: 750px) {
            width: 100px;
            height: 70px;
        }
    }
`

export const FormBox = styled.div `
    max-width: 500px;
    width: 100%;
    background-color: var(--color-base-default);
    border: 5px solid #F5F5F5;
    padding: 40px 30px;

    @media (max-width: 750px) {
        width: 95%;
    }
`

export const Title = styled.h1 `
    font-size: var(--font-size-heading-three);
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
`

export const LoginButton = styled.div `
    width: 100%;
    height: 60px;

    button {
        width: 100%;
        height: 100%;
        background-color: var(--color-secondary);
        color: white;
        border-radius: 8px;
        cursor: pointer;
        font-size: var(--font-size-heading-four);
    }
`

export const NotRegistered = styled.h2 `
    margin: 20px 0px;
    text-align: center;
    color: var(--color-text);
    font-size: var(--font-size-headline);
`

export const RegisterButton = styled.div `
    width: 100%;
    height: 60px;

    button {
        width: 100%;
        height: 100%;
        background-color: #EEEEEE;
        color: var(--color-placeholder);
        border-radius: 8px;
        cursor: pointer;
        font-size: var(--font-size-heading-four);
    }
`

export const ErrorMessage = styled.span `
    color: red;
`