import {ContainerTask, HeaderCard, HeaderTitle, HeaderOptions, Square, Content, Description, ProgressBar, Date} from "./style"

import {FaTrash} from "react-icons/fa"
import {MdDone} from "react-icons/md"

import {useTask} from "../../providers/TaskContext/index"


interface Task {
    id: string
    title: string
    description: string
    progress: number
    date: string
}

interface TaskProps {
    task: Task
}


const CardTasks = ({task}: TaskProps) => {

    const {removeTask, openModalViewTask, addProgress} = useTask()

    return (
        <ContainerTask onClick={() => openModalViewTask(task)}>
            <HeaderCard>
                <HeaderTitle>
                    <h3>{task.title}</h3>
                </HeaderTitle>
                <HeaderOptions>
                    <Square onClick={(evt) => {
                        evt.stopPropagation()
                        removeTask(task)
                    }}>
                        <FaTrash/>
                    </Square>
                    <Square task={task} onClick={(evt) => {
                        evt.stopPropagation()
                        addProgress(task.id)
                    }}>
                        <MdDone/>
                    </Square>
                </HeaderOptions>
            </HeaderCard>
            <Content>
                <Description>
                    <p>{task.description}</p>
                </Description>
                <ProgressBar>
                    <progress value={task.progress} max="100"/>
                </ProgressBar>
                <Date>
                    <p>{task.date}</p>
                </Date>
            </Content>
        </ContainerTask>
    )
}


export default CardTasks