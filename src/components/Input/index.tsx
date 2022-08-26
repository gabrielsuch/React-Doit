import {Container} from "./style"



interface InputProps {
    type: string
    name: string
    placeholder: string
    labelText?: string
    register: any
}


const Input = ({type, name, placeholder, labelText, register}: InputProps) => {

    return (
        <Container>
            <label htmlFor={name}>{labelText}</label>
            <input type={type} placeholder={placeholder} {...register(name)}/>
        </Container>
    )
}


export default Input