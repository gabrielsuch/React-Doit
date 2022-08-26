import styled from "styled-components"

interface ButtonProps {
    type?: string
    bgColor?: string
    color?: string
    text?: string
}


export const Container = styled.div <ButtonProps>`
    width: 100%;
    height: 60px;
    margin: 10px 0px;

    button {
        width: 100%;
        height: 100%;
        background-color: ${props => props.bgColor === "secondary" ? "#38085C" : props.bgColor === "primary" && "#8615DF"};
        color: ${props => props.color === "white" ? "#FFFFFF" : "#9E9EA7"};
        font-size: var(--font-size-heading-four);
        border-radius: 8px;
        cursor: pointer;

        svg {
            animation: rotate 1.5s linear infinite;
        }
    }
    
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`