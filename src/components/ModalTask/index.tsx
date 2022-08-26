import {Container, Modal, HeaderModal, Square, HeaderTitle, HeaderClose, Form, ErrorMessage, ShowOnlyContainer} from "./style"

import {FaFile} from "react-icons/fa"

import Input from "../Input/index"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useTask} from "../../providers/TaskContext/index"


interface DataProps {
    title: string
    description: string
    id: string
    userId: string
}


const ModalTask = () => {

    const {closeModalAddTask, addTask} = useTask()

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        description: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<DataProps>({
        resolver: yupResolver(schema)
    })

    const onClickSubmit = (data: DataProps) => {
        addTask(data)
    }

    return (
        <>
            <Container>
                <Modal>
                    <HeaderModal>
                        <HeaderTitle>
                            <Square>
                                <FaFile/>
                            </Square>
                            <h2>Adicionar</h2>
                        </HeaderTitle>
                        <HeaderClose>
                            <button onClick={() => closeModalAddTask()}>X</button>
                        </HeaderClose>
                    </HeaderModal>
                    <Form onSubmit={handleSubmit(onClickSubmit)}>
                        <Input type="text" name="title" placeholder="Digite seu título" labelText="Título" register={register}/>
                        <ErrorMessage>{errors.title?.message}</ErrorMessage>
                        <label htmlFor="description">Descrição</label>
                        <textarea placeholder="Digite sua descrição" rows={5} {...register("description")}></textarea>
                        <ErrorMessage>{errors.description?.message}</ErrorMessage>
                        <button type="submit">Adicionar Tarefa</button>
                    </Form>
                </Modal>
            </Container>
            <ShowOnlyContainer onClick={() => closeModalAddTask()}/>
        </>
    )
}


export default ModalTask