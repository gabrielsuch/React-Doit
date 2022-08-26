import {Container, ProfileName, Logout, Square, Message} from "./style"

import {FiLogOut} from "react-icons/fi"

import {useAuth} from "../../providers/AuthContext/index"


const ModalProfile = () => {

    const {logout} = useAuth()

    return (
        <Container>
            <ProfileName>Ana Beatriz</ProfileName>
            <Logout>
                <Square onClick={() => logout()}>
                    <FiLogOut/>     
                </Square>   
                <Message>
                    <h2>Sair da minha conta</h2>
                    <p>Sair da minha conta</p>
                </Message>
            </Logout>
        </Container>
    )
}


export default ModalProfile