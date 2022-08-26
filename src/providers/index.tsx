import {AuthProvider} from "./AuthContext/index"
import {TaskProvider} from "./TaskContext/index";


import {ReactNode} from "react"


interface ChildrenProps {
    children: ReactNode
}


const Providers = ({children}: ChildrenProps) => {
    return (
        <AuthProvider>
            <TaskProvider>
                {children}
            </TaskProvider>
        </AuthProvider>
    )
}


export default Providers