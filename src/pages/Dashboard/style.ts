import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    height: 100vh;
`

export const ContainerSearch = styled.div `
    width: 100%;
    border-bottom: 2px solid #F5F5F5;
`

export const Search = styled.div `
    width: 80%;
    margin: 15px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 10px;
`

export const InputBrowseTask = styled.div `
    max-width: 574px;
    width: 100%;

    input {
        width: 100%;
        padding: 0px 15px;
        height: 60px;
        border-radius: 8px;
        background-color: #F6F6F7;
    }
`

export const ButtonAddTask = styled.div `
    max-width: 288px;
    width: 100%;
    padding-left: 16px;

    button {
        width: 100%;
        cursor: pointer;
        color: white;
        height: 60px;
        font-size: 18px;
        border-radius: 8px;
        background-color: var(--color-primary);
    }

    @media (max-width: 1102px) {
        padding: 10px 0px;
    }
`

export const ContainerCards = styled.div `
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 1200px) {
        width: 100%;
    }
`

export const ContainerCreateFirstTask = styled.div `
    /* max-width: 1480px; */
    width: 90%;
    margin: 0 auto;
    border: 2px dashed #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 35px;
`

export const ContainerInfo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`

export const LogoBook = styled.div `
    width: 41px;
    height: 47px;

    svg {
        width: 100%;
        height: 100%;
        color: #BDBDBD;
    }
`

export const Title = styled.h1 `
    font-size: var(--font-size-heading-two);
    text-align: center;
    padding: 15px 0px;
`

export const Message = styled.p `
    max-width: 334px;
    text-align: center;
    font-size: var(--font-size-headline);
`

export const ButtonFirstTask = styled.div `
    padding-top: 15px;
    max-width: 255px;
    width: 100%;

    button {
        width: 100%;
        cursor: pointer;
        background-color: var(--color-secondary);
        color: white;
        padding: 10px;
        border-radius: 8px;
    }
`