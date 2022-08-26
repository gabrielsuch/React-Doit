import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;   
    /* ESTÁ BUGANDO POR CAUSA DO JUSTIFY-CONTENT /\    */
    align-items: center;
    background: linear-gradient(to right, var(--color-base-default) 0% 35%, var(--color-secondary) 35% 100%);

    @media (max-width: 750px) {
        background: linear-gradient(to bottom, var(--color-secondary) 0% 40%, var(--color-base-default) 40% 100%);
        flex-direction: column-reverse;
    }
`

export const BackButton = styled.div `
    margin: 30px;
    width: 84px;
    height: 68px;
    border-radius: 5px;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 120px;
    left: 0;

    @media (max-width: 1100px) {
        top: -10px;
    }

    @media (max-width: 750px) {
        width: 60px;
        height: 60px;
        left: 70%;
    }

    button {
        background-color: var(--color-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        svg {
            width: 50px;
            height: 25px;
            color: white;
        }
    }
`

export const FormBox = styled.div `
    max-width: 510px;
    width: 100%;
    background-color: var(--color-base-default);
    border-radius: 5px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    border: 5px solid #E0E0E0;

    @media (max-width: 750px) {
        width: 95%;
    }
`

export const Title = styled.div `
    h1 {
        font-size: var(--font-size-heading-three);
        font-weight: 700;
        color: var(--color-title);
    }
`

export const Form = styled.form `
    margin-top: 20px;
    width: 100%;
`

export const Options = styled.div `
    width: 28%;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;

    @media (max-width: 750px) {
        padding-left: 10px;
        max-width: 500px;
        width: 100%;
        display: flex;
        align-items: flex-start;
    }
`

export const Logo = styled.div `
    width: 150px;
    height: 100px;

    img {
        width: 150px;
        height: 100px;

        @media (max-width: 750px) {
            margin-top: 30px;
            width: 100px;
            height: 70px;
        }
    }
`

export const Line = styled.div `
    display: flex;
    flex-direction: row;
    color: white;
    margin: 40px 0px;

    @media (max-width: 750px) {
        margin: 10px 0px;
    }
`

export const Column = styled.div `
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    max-width: 230px;
    width: 100%;

    h2 {
        font-size: var(--font-size-heading-four);
    }

    p {
        padding-top: 5px;
        font-size: var(--font-size-body);
    }
`

export const Square = styled.div `
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    path {
        color: var(--color-secondary);
    }
`

export const ContainerOption = styled.div `
    margin-top: 50px;

    @media (max-width: 750px) {
        margin-top: 0px;
    }
`

export const ErrorMessage = styled.span `
    color: var(--color-error);
`