import styled from "styled-components"


export const Container = styled.div `
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    background-color: var(--color-base-default);
    z-index: 1;
    opacity: 1;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
`

export const Modal = styled.div `
    padding: 15px;
`

export const HeaderModal = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Square = styled.div `
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    color: white;
`

export const HeaderTitle = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
        padding-left: 10px;
        font-size: var(--font-size-heading-four);
    }
`

export const HeaderClose = styled.div `
    width: 30px;
    height: 30px;
    background-color: var(--color-error);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    button {
        width: 100%;
        height: 100%;
        cursor: pointer;
        color: white;
        background-color: transparent;
    }
`

export const Form = styled.form `
    width: 100%;

    label {
        color: var(--color-text);
        font-size: var(--font-size-body);
    }
    
    textarea {
        width: 100%;
        margin-top: 15px;
        padding: 10px;
        resize: none;
        background-color: #F6F6F7;
    }

    button {
        width: 100%;
        color: white;
        background-color: var(--color-primary);
        border-radius: 8px;
        height: 60px;
        font-size: 18px;
        cursor: pointer;
    }
`

export const ErrorMessage = styled.p `
    color: var(--color-error);
    width: 100%;
    margin-bottom: 10px;
`

export const ShowOnlyContainer = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #131313;
    z-index: 0;
    position: fixed;
    opacity: 0.5;
`