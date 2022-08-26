import {Container, SeparateItems, Logo, Menu} from "./style"
import {RiGridFill} from "react-icons/ri"

import {useState} from "react"

import ModalProfile from "../ModalProfile/index"


const dologo = require("../../assets/do.png")


const Header = () => {

    const [modalProfile, setModalProfile] = useState<boolean>(false)

    return (
        <Container>
            <SeparateItems>
                <Logo>
                    <img src={dologo} alt="Logo DO" />
                    <h2>Dashboard</h2>
                </Logo>
                <Menu>
                    <RiGridFill onClick={() => setModalProfile(!modalProfile)}/>
                    {
                        modalProfile &&
                        <ModalProfile/>
                    }
                </Menu>
            </SeparateItems>
        </Container>
    )
}


export default Header