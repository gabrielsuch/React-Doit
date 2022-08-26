import {useEffect} from "react"

import {Container, ShowOnlyContainer, Header, HeaderTitle, HeaderOptions, Square, Main, ProgressBar, Date} from "./style"

import {useTask} from "../../providers/TaskContext/index"

import {FaCube, FaTrash} from "react-icons/fa"
import {MdDone} from "react-icons/md"


interface Task {
    id: string
    title: string
    description: string
    progress: number
    date: string
}

interface TaskProps {
    selectedTask: Task
}



const ModalViewTask = ({selectedTask}: TaskProps) => {

    const {closeModalViewTask, removeTask, addProgress, getTask, updatedTask} = useTask()

    useEffect(() => {
        getTask(selectedTask.id)
    }, [])

    return (
        <>
            <Container>
                <Header>
                    <HeaderTitle>
                        <div className="logoModal">
                            <FaCube/>
                        </div>
                        <div className="titleModal">
                            <h2>Visualizar</h2>
                        </div>
                    </HeaderTitle>
                    <HeaderOptions>
                        <Square onClick={() => {
                            removeTask(updatedTask)
                            closeModalViewTask()
                        }}>
                            <FaTrash/>
                        </Square>
                        <Square task={updatedTask} onClick={() => {
                            addProgress(updatedTask.id)
                        }}>
                            <MdDone/>
                        </Square>
                        <Square style={{backgroundColor: "#DF1545", color: "white", borderColor: "transparent"}} onClick={() => closeModalViewTask()}>
                            <span>X</span>
                        </Square>
                    </HeaderOptions>
                </Header>
                <Main>
                    <div className="taskTitle">
                        <h1>{updatedTask.title}</h1>
                    </div>
                    <div className="taskDescription">
                        {updatedTask.description}
                    </div>
                    <ProgressBar>
                        <progress value={updatedTask.progress} max="100"/>
                    </ProgressBar>
                    <Date>
                        <p>{updatedTask.date}</p>
                    </Date>
                </Main>
            </Container>
            <ShowOnlyContainer onClick={() => closeModalViewTask()}/>
        </>
    )
}


export default ModalViewTask