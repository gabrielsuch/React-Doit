import {Container} from "./style"
import {ReactNode} from "react"


interface ButtonProps {
    type?: string
    bgColor?: string
    color?: string
    width?: string
    children: ReactNode
}


const Button = ({type, bgColor, color, width, children}: ButtonProps) => {
    return (
        <Container bgColor={bgColor} color={color}>
            <button>{children}</button>
        </Container>
    )
}


export default Button