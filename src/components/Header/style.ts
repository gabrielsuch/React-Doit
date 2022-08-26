import styled from "styled-components"


export const Container = styled.header `
    width: 100%;
    padding: 10px;
    background-color: var(--color-base-default);
    border-bottom: 2px solid #F5F5F5;
`

export const SeparateItems = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`

export const Logo = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h2 {
        margin: 0px 10px;
    }
`

export const Menu = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    svg {
        cursor: pointer;
        width: 29px;
        height: 29px;
        position: absolute;
    }
`