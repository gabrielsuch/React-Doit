import {Container, Info, Logo, DescriptionInfo ,FormBox, Title, Form, LoginButton, NotRegistered, RegisterButton, ErrorMessage} from "./style"

import Input from "../../components/Input/index"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useHistory} from "react-router-dom"

import {useAuth} from "../..//providers/AuthContext/index"

import Button from "../../components/Button/index"

import {AiOutlineLoading3Quarters} from "react-icons/ai"


const doit = require("../../assets/doit.png")


interface SchemaProps {
    email: string
    password: string
}


const Login = () => {

    const {login, loading, changeLoadingState} = useAuth()

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email(),
        password: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<SchemaProps>({
        resolver: yupResolver(schema)
    })

    const onClickSubmit = (data: SchemaProps) => {
        changeLoadingState()
        login(data)
    }

    return (
        <Container>
            <Info>
                <Logo>
                    <img src={doit} alt="Do It Logo" />
                </Logo>
                <DescriptionInfo>
                    <h1>O jeito fácil, grátis</h1>
                    <p>flexível e atrativo de gerenciar <span>seus projetos</span> em uma única plataforma</p>
                </DescriptionInfo>
            </Info>
            <FormBox>
                <Title>Bem vindo de volta!</Title>
                <Form onSubmit={handleSubmit(onClickSubmit)}>
                    <Input type="text" name="email" placeholder="Digite seu email" labelText="Email" register={register}/>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    <Input type="password" name="password" placeholder="Digite sua senha" labelText="Senha" register={register}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" bgColor="secondary" color="white">
                        {
                            loading ?
                            <AiOutlineLoading3Quarters/>
                            :
                            <p>Entrar</p>
                        }
                    </Button>
                    <NotRegistered>Ainda não possui uma conta?</NotRegistered>
                </Form>
                <span onClick={() => history.push("/")}>
                    <Button bgColor="white" color="placeholder">Cadastrar</Button>
                </span>
            </FormBox>
        </Container>
    )
}


export default Login