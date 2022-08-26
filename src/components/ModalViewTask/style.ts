import styled, {css} from "styled-components"


interface Task {
    id: string
    title: string
    description: string
    progress: number
    date: string
}

interface SquareProps {
    background?: string
    color?: string
    task?: Task
}


export const Container = styled.div `
    background-color: #F2F2F2;
    max-width: 460px;
    width: 100%;
    z-index: 10;
    opacity: 1;
    padding: 30px;
    border-radius: 5px;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    display: flex;
    flex-direction: column;
`

export const ShowOnlyContainer = styled.div `
    width: 100%;
    height: 100vh;
    opacity: 0.8;
    position: fixed;
    z-index: 0;
    background-color: #131313;
`

export const Header = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const HeaderTitle = styled.div `
    display: flex;
    flex-direction: row;

    .logoModal {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        color: white;
        background-color: var(--color-primary);

        svg {
            width: 20px;
            height: 20px;
        }
    }
    .titleModal {
        margin: 0px 10px;
    }
`

export const HeaderOptions = styled.div `
    display: flex;
    flex-direction: row;
`

export const Square = styled.button<SquareProps> `
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #9E9EA7;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    cursor: pointer;

    ${({task}) => 
        task && task.progress >= 100 
        ? css `
            background-color: var(--color-secondary);
            color: #FFFFFF;
        `
        :
        css `
            background-color: transparent;
            color: #000000;
        `
    }

`

export const Main = styled.main `

    .taskTitle {
        font-size: var(--font-size-heading-headline);
        margin: 20px 0px;
    }

    .taskDescription {
        height: 240px;
        overflow: auto;
        font-size: var(--font-size-headline);
        color: var(--color-text);
        margin-bottom: 20px;
    }
`

export const ProgressBar = styled.div `
    width: 100%;

    progress {
        width: 100%;
    }
`

export const Date = styled.div `
    width: 100%;
    padding-top: 10px;

    p {
        font-size: var(--font-size-body);
        color: var(--color-placeholder);
    }
`