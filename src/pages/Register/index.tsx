// import {Container, LeftSide, RightSide, ContainerRightSide, BackButton, FormBox, Title, Form, ErrorMessage, Options, Logo, Line, Column, Square, ContainerOption} from "./style"

import {Container, BackButton, FormBox, Title, Form, ErrorMessage, Options, Logo, ContainerOption, Line, Square, Column} from "./style"

import {AiOutlineLoading3Quarters} from "react-icons/ai"
import {MdOutlineArrowBack} from "react-icons/md"
import {FaForward} from "react-icons/fa"
import {GiCard10Clubs} from "react-icons/gi"

import Input from "../../components/Input/index"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useHistory} from "react-router-dom"

import {useAuth} from "../../providers/AuthContext/index"

import Button from "../../components/Button/index"

const doit = require("../../assets/doit.png")


interface DataProps {
    name: string
    email: string
    password: string
    confirmPassword: string
}



const Register = () => {

    const {createAccount, loading, changeLoadingState} = useAuth()

    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email(),
        password: yup.string().required("Campo Obrigatório"),
        confirmPassword: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<DataProps>({
        resolver: yupResolver(schema)
    })

    const onClickSubmit = (data: DataProps) => {
        changeLoadingState()
        createAccount(data)
    }

    return (
        <Container>
            <BackButton onClick={() => history.push("/login")}>
                <button>
                    <MdOutlineArrowBack/>
                </button>
            </BackButton>
                <FormBox>
                    <Title>
                        <h1>Crie sua conta</h1>
                    </Title>
                    <Form onSubmit={handleSubmit(onClickSubmit)}>
                        <Input type="text" name="name" placeholder="Digite seu nome" labelText="Nome" register={register}/>
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                        <Input type="text" name="email" placeholder="Digite seu email" labelText="Email"  register={register}/>
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>
                        <Input type="password" name="password" placeholder="Digite sua senha" labelText="Senha" register={register}/>
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>
                        <Input type="password" name="confirmPassword" placeholder="Confirmar Senha" labelText="Confirmar Senha" register={register}/>
                        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
                        <Button bgColor="secondary" color="white">
                            {
                                loading ?
                                <AiOutlineLoading3Quarters/>
                                :
                                <p>Finalizar Cadastro</p>
                            }
                        </Button>
                    </Form>
                </FormBox>
                <Options>
                    <Logo>
                        <img src={doit} alt="Logo doit" />
                    </Logo>
                    <ContainerOption>
                        <Line>
                            <Square>
                                <FaForward/>
                            </Square>
                            <Column>
                                <h2>Agilidade</h2>
                                <p>Agilize seus projetos com rapidez e muita performance</p>
                            </Column>
                        </Line>
                        <Line>
                            <Square>
                                <GiCard10Clubs/>
                            </Square>
                            <Column>
                                <h2>Simplicidade</h2>
                                <p>Armazene seus projetos em uma interface altamente usual</p>
                            </Column>
                        </Line>
                    </ContainerOption>
                </Options>
        </Container>
    )
}


export default Register