import {createContext, useContext, useState, ReactNode} from "react"
import { api } from "../../services"

import {useAuth} from "../AuthContext/index"


interface ChildrenProps {
    children: ReactNode
}

interface AddTaskProps {
    title: string
    description: string
}

interface TaskProps {
    id: string
    title: string
    description: string
    progress: number
    date: string
}

interface ContextData {
    tasks: TaskProps[]
    modalTask: boolean
    modalViewTask: boolean
    browseTask: string
    browseTaskFunction: (task: string) => void
    openModalAddTask: () => void
    closeModalViewTask: () => void
    closeModalAddTask: () => void
    openModalViewTask: (task: TaskProps) => void
    getTask: (id: string) => void
    getTasks: () => void
    addTask: (task: AddTaskProps) => void
    removeTask: (task: TaskProps) => void
    addProgress: (id: string) => void
    selectedTask: TaskProps
    updatedTask: TaskProps
}


const TaskContext = createContext<ContextData>({} as ContextData)


export const TaskProvider = ({children}: ChildrenProps) => {

    const {accessToken} = useAuth()

    const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[])

    const [modalTask, setModalTask] = useState<boolean>(false)
    const [modalViewTask, setModalViewTask] = useState<boolean>(false)


    // ENQUANTO ESTIVER COM O MODAL DE VER A TASK ABERTO, E APERTAR EM DONE, O PROGRESSO DENTRO DO MODAL NÃO ESTÁ MUDANDO AUTOMATICAMENTE
    const [selectedTask, setSelectedTask] = useState<TaskProps>({} as TaskProps)
    const [updatedTask, setUpdatedTask] = useState<TaskProps>({} as TaskProps)

    const [browseTask, setBrowseTask] = useState<string>("" as string)

    const browseTaskFunction = (task: string) => {
        setBrowseTask(task)
    }

    const openModalAddTask = () => {
        setModalTask(true)
    }

    const closeModalAddTask = () => {
        setModalTask(false)
    }

    const openModalViewTask = (task: TaskProps) => {
        setSelectedTask(task)
        setModalViewTask(true)
    }
    
    const closeModalViewTask = () => {
        setModalViewTask(false)
    }

    const getTask = (id: string) => {
        // FAZER O USO PARA PEGAR A TASK POR ID, PARA NO MODAL FICAR SEMPRE ATUALIZADO
        api.get(`/task/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            setUpdatedTask(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getTasks = () => {
        api.get(`/task`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            setTasks(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const addTask = (task: AddTaskProps) => {
        api.post(`/task`, task, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((_) => {
            getTasks()
            closeModalAddTask()
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const removeTask = (task: TaskProps) => {
        api.delete(`/task/${task.id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((_) => {
            getTasks()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const addProgress = (id: string) => {
        api.patch(`/task/progress/${id}`, "" ,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((_) => {
            getTasks()
            getTask(id)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <TaskContext.Provider value={{tasks, openModalAddTask, closeModalAddTask, browseTask, modalTask, modalViewTask, getTask, getTasks, addTask, removeTask, openModalViewTask, closeModalViewTask, addProgress, selectedTask, updatedTask, browseTaskFunction}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => useContext(TaskContext)