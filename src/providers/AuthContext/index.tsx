import {createContext, useContext, ReactNode, useState} from "react"

import {api} from "../../services/index"

import {useHistory} from "react-router-dom"

import {toast} from "react-toastify"


interface ChildrenProps {
    children: ReactNode
}

interface UserProps {
    name: string
    email: string
    password: string
    confirmPassword: string
}

interface User {
    id: number
    email: string
    name: string
}

interface LoginProps {
    email: string
    password: string
}

interface AuthProps {
    accessToken: string
}

interface ContextData {
    createAccount: (data: UserProps) => void
    login: (data: LoginProps) => void
    logout: () => void
    accessToken: string
    loading: boolean
    changeLoadingState: () => void
}


const AuthContext = createContext<ContextData>({} as ContextData)


export const AuthProvider = ({children}: ChildrenProps) => {

    const [loading, setLoading] = useState<boolean>(false)

    const changeLoadingState = () => {
        setLoading(!loading)
    }

    const history = useHistory()

    const [data, setData] = useState<AuthProps>(() => {
        const accessToken = localStorage.getItem("@DoIt:token")

        if(accessToken) {
            return {
                accessToken
            }
        }

        return {} as AuthProps
    })

    const createAccount = (data: UserProps) => {
        const {confirmPassword, ...newData} = data

        api.post("/user/register", newData)
        .then((_) => {
            toast.success("Conta Criada com Sucesso!")
            history.push("/login")
        })
        .catch((err) => {
            toast.error("Erro na Criação da Conta. Pode ser que este email já existe.")
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const login = (data: LoginProps) => {
        api.post("/user/login", data)
        .then((response) => {
            toast.success("Seja Bem-vindo!")

            const {accessToken} = response.data
            
            localStorage.setItem("@DoIt:token", accessToken)

            setData({accessToken})

            history.push("/dashboard")
        })
        .catch((err) => {
            toast.error("Dados incorretos.")
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const logout = () => {
        localStorage.removeItem("@DoIt:token")
        localStorage.clear()
        
        setData({} as AuthProps)
        history.push("/login")
    }

    return (
        <AuthContext.Provider value={{createAccount, login, logout, accessToken: data.accessToken, loading, changeLoadingState}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)