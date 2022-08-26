import styled from "styled-components"


export const Container = styled.div `
    width: 430px;
    border-radius: 8px;
    padding: 15px;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: -30px;

    @media (max-width: 500px) { 
        width: 300px;
    }
`

export const ProfileName = styled.h1 `
    font-size: var(--font-size-headline);
    color: var(--color-text);
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`

export const Logout = styled.div `
    display: flex;
    flex-direction: row;
    padding-top: 10px;
`

export const Square = styled.div `
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: var(--color-error);
    cursor: pointer;
    
    svg {
        transform: rotate(180deg);
        width: 30px;
        height: 30px;
        color: white;
    }
`

export const Message = styled.div `
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-size: var(--font-size-heading-four);
    }

    p {
        font-size: var(--font-size-headline);
        color: var(--color-text);
    }
`