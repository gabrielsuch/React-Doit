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


export const ContainerTask = styled.div `
    max-width: 460px;
    width: 100%;
    background-color: #FFFFFF;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #F2F2F2;
    padding: 15px;
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export const HeaderCard = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const HeaderTitle = styled.div `
    h3 {
        color: var(--color-title);
        font-size: var(--font-size-heading-four);
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
    };
`


export const Content = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Description = styled.div `
    width: 85%;
    padding: 10px 0px;

    p {
        color: var(--color-text);
        font-size: var(--font-size-headline);
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