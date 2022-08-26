import {Container, ContainerSearch, Search, InputBrowseTask, ButtonAddTask, ContainerCards, ContainerCreateFirstTask, ContainerInfo, LogoBook, Title, Message, ButtonFirstTask} from "./style"

import Header from "../../components/Header/index"

import {useTask} from "../../providers/TaskContext/index"

import CardTasks from "../../components/CardTasks/index"
import ModalTask from "../../components/ModalTask/index"
import ModalViewTask from "../../components/ModalViewTask"

import {FaBook} from "react-icons/fa"
import { useEffect } from "react"


const Dashboard = () => {

    const {tasks, openModalAddTask, closeModalAddTask, modalTask, getTasks, modalViewTask, selectedTask, browseTaskFunction, browseTask} = useTask()

    useEffect(() => {
        getTasks()
    }, [])

    const filterTasks = tasks.filter((task) => {
        return task.title.startsWith(browseTask)
    }) 

    return (
        <>
            <Container>
                {
                    modalTask &&
                    <ModalTask/>
                }
                {
                    modalViewTask &&
                    <ModalViewTask selectedTask={selectedTask}/>
                }
                
                <Header/>

                {
                    tasks.length > 0 ?
                    <>
                        <ContainerSearch>
                            <Search>
                                <InputBrowseTask>
                                    <input type="text" placeholder="Pesquisar por tarefa" onChange={(evt) => browseTaskFunction(evt.target.value)}/>
                                </InputBrowseTask>
                                <ButtonAddTask>
                                    <button onClick={() => openModalAddTask()}>Adicionar nova tarefa</button>
                                </ButtonAddTask>
                            </Search>
                        </ContainerSearch>
                        <ContainerCards>
                            {
                                filterTasks.map((task, index) => (
                                    <CardTasks key={index} task={task}/>
                                ))
                            }
                        </ContainerCards>
                    </>
                    :
                    <>
                        <ContainerCreateFirstTask>
                            <ContainerInfo>
                                <LogoBook>
                                    <FaBook/>
                                </LogoBook>
                                <Title>Vamos criar sua primeira tarefa</Title>
                                <Message>Insira sua meta e mostre a você mesmo sua capacidade em cumpir <strong>suas atividades</strong></Message>
                                <ButtonFirstTask>
                                    <button onClick={() => openModalAddTask()}>Criar minha primeira tarefa</button>
                                </ButtonFirstTask>
                            </ContainerInfo>
                        </ContainerCreateFirstTask>
                    </>
                }
            </Container>
        </>
    )
}

export default Dashboard